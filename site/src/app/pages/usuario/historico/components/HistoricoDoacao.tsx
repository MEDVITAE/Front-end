import { useEffect, useState } from "react";
import { IAgendaParaHistorico, IHistoricoDeAgendamento, IHospitalParaHistorico, TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { ApiException } from "../../../../shared/sevice/api/ApiException";
import Swal from "sweetalert2";

export const HistoricoDoacao: React.FC = () => {

    const [historico, setHistorico] = useState<IHistoricoDeAgendamento | null>(null);
    const [historicoV1, setHistoricoV1] = useState<IHistoricoDeAgendamento | null>(null);

    const tokenSession = sessionStorage.getItem('token');
    const idSession = sessionStorage.getItem('id');

    const showValidationErrorModal = (message: string) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
    
        Toast.fire({
          icon: "error",
          title: message,
        });
    
      };

     useEffect(() => {

        TarefasService.getAllHistorico(idSession ? idSession : '', tokenSession ? tokenSession : '')
            .then((result) => {

                if (result instanceof ApiException) {
                    showValidationErrorModal("Erro ao carregar histórico")
                } else {
                    const agendaMapeada: IAgendaParaHistorico[] = result.data.agenda.map((agenda) => ({
                        idAgenda: agenda.idAgenda,
                        fkHospital: agenda.fkHospital,
                        fkUsuario: agenda.fkUsuario,
                        horario: new Date(agenda.horario),
                    }));

                    const hospitalMapeado: IHospitalParaHistorico[] = result.data.hospital.map((hospital) => ({
                        id: hospital.id,
                        nome: hospital.nome,
                        rua: hospital.rua,
                        logradouro: hospital.logradouro
                    }));

                    const agendamentoMaisRecente = agendaMapeada.reduce((maisRecente, atual) => {
                        return maisRecente.horario > atual.horario ? maisRecente : atual;
                    }, agendaMapeada[0]);

                    const hospital = hospitalMapeado.find((hosp) => hosp.id === agendamentoMaisRecente.fkHospital);

                    const novoHistorico = {
                        quantidade: result.data.quantidade,
                        quantidadeDoacao: result.data.quantidadeDoacao,
                        agenda: agendaMapeada,
                        hospital: hospitalMapeado,
                    };

                    setHistorico(novoHistorico);

                    if (novoHistorico.agenda && novoHistorico.agenda.length !== novoHistorico.quantidadeDoacao) {
                        sessionStorage.setItem('idAgendamento', agendamentoMaisRecente.idAgenda.toString());
                        sessionStorage.setItem('horario', `${agendamentoMaisRecente.horario.getHours() < 10 ? '0' : ''}${agendamentoMaisRecente.horario.getHours()}:${agendamentoMaisRecente.horario.getMinutes() < 10 ? '0' : ''}${agendamentoMaisRecente.horario.getMinutes()}`);
                        sessionStorage.setItem('data', agendamentoMaisRecente.horario.getDate() + "/" + (Number(agendamentoMaisRecente.horario.getMonth()) + 1) + "/" + agendamentoMaisRecente.horario.getFullYear());
                        sessionStorage.setItem('hemo', hospital ? hospital.nome : '');
                        sessionStorage.setItem('rua', hospital ? hospital.rua : '');
                        sessionStorage.setItem('logradouro', hospital ? hospital.logradouro : '');
                    } else {
                        sessionStorage.removeItem('idAgendamento');
                        sessionStorage.removeItem('horario');
                        sessionStorage.removeItem('data');
                        sessionStorage.removeItem('hemo');
                        sessionStorage.removeItem('rua');
                        sessionStorage.removeItem('logradouro');
                    }
                }
            });
    }, []);

    useEffect(() => {
        setHistoricoV1(historico);
    }, [historico]);

    return (
        <>
            <div className="doacaoAnterior">
                <h2 className='rowdies'>HISTÓRICO</h2>
                {historicoV1 && historicoV1.agenda && historicoV1.agenda.map((agenda, index) => {
                    const hospital = historicoV1.hospital?.find((hosp) => hosp.id === agenda.fkHospital);

                    if (index < historicoV1.quantidadeDoacao) {
                        return (
                            <div className="doacao" key={agenda.idAgenda}>
                                <div className="doacaoAtual bg-vermelhoClaro">
                                    <div className="item">
                                        <h2 className='roboto sbold-20'>Doação n°: {index + 1}</h2>
                                        <h2 className='roboto sbold-20'>Pts: 5</h2>
                                    </div>
                                    <div className="item">
                                        <h2 className='roboto sbold-20'>Data: {agenda.horario && `${agenda.horario.getDate()}/${agenda.horario.getMonth() + 1}/${agenda.horario.getFullYear()}`}</h2>
                                        <h2 className='roboto sbold-20'>Hora: {agenda.horario && `${agenda.horario.getHours()}:${agenda.horario.getMinutes() < 10 ? '0' : ''}${agenda.horario.getMinutes()}`}</h2>
                                    </div>
                                    <div className="item">
                                        <h2 className='roboto sbold-20'>Hemo: {hospital?.nome}</h2>
                                        <h2 className='roboto sbold-20'>Local: {hospital?.logradouro + " " + hospital?.rua}</h2>
                                    </div>
                                </div>
                                <div className="caixaLitros">
                                    <div className="litros">
                                        <h3 className='roboto'>Parabéns</h3>
                                        <h2 className='roboto'>Vida Salva</h2>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}