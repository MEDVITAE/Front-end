import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IAgendaParaHistorico, IHistoricoDeAgendamento, IHospitalParaHistorico, TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { ApiException } from "../../../../shared/sevice/api/ApiException";

export const HistoricoDoacao: React.FC = () => {

    const [historico, setHistorico] = useState<IHistoricoDeAgendamento | null>(null);
    const [historicoV1, setHistoricoV1] = useState<IHistoricoDeAgendamento | null>(null);

    const tokenSession = sessionStorage.getItem('token');
    const idSession = sessionStorage.getItem('id');

    useEffect(() => {

        TarefasService.getAllHistorico(idSession ? idSession : '', tokenSession ? tokenSession : '')
            .then((result) => {

                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    const agendaMapeada: IAgendaParaHistorico[] = result.data.agenda.map((agenda) => ({
                        idAgenda: agenda.idAgenda,
                        fkHospital: agenda.fkHospital,
                        fkUsuario: agenda.fkUsuario,
                        horario: new Date(agenda.horario),
                    }));

                    const hospitalMapeado: IHospitalParaHistorico[] = result.data.hospital.map((hospital) => ({
                        nome: hospital.nome,
                        rua: hospital.rua,
                    }));

                    setHistorico({
                        quantidade: result.data.quantidade,
                        quantidadeDoacao: result.data.quantidadeDoacao,
                        agenda: agendaMapeada,
                        hospital: hospitalMapeado,
                    });
                }
            });
    }, []);

    useEffect(() => {
        setHistoricoV1(historico);
        console.log(historicoV1 ? 'foi' : 'n foi');
    }, [historico]);


    return (
        <>
            <div className="doacaoAnterior">
                <h2 className='rowdies'>HISTÓRICO</h2>
                {historicoV1 && historicoV1.agenda && historicoV1.agenda.map((agenda) => (
                    <div className="doacao" key={agenda.idAgenda}>
                        <div className="doacaoAtual bg-vermelhoClaro">
                            <div className="item">
                                <h2 className='roboto'>Doação n°: {agenda.idAgenda}</h2>
                                <h2 className='roboto'>Pts: 5</h2>
                            </div>
                            <div className="item">
                                <h2 className='roboto'>Data: {agenda.horario.getDate() + "/" + agenda.horario.getMonth() + "/" + agenda.horario.getFullYear()}</h2>
                                <h2 className='roboto'>Hora: {agenda.horario.getHours()}</h2>
                            </div>
                            <div className="item">
                                <h2 className='roboto'>Hemocentro: {}</h2>
                                <h2 className='roboto'>Local: {}</h2>
                            </div>
                        </div>
                        <div className="caixaLitros">
                            <div className="litros">
                                <h3 className='roboto'>Parabéns</h3>
                                <h2 className='roboto'>Vida Salva</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}