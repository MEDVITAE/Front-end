import '../../../../html-css-template/css/AgendaDoacao.css'
import { MenuPerfilFuncionario, MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { useEffect, useMemo, useState } from 'react';
import { IAgendamentosHospital, TarefasService } from '../../../shared/sevice/api/tarefas/TarefasService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ApiException } from '../../../shared/sevice/api/ApiException';
import Swal from 'sweetalert2'

export const AgendaHistorico = () => {
    const navegando = useNavigate();
    const [pesquisa, setPesquisa] = useSearchParams();
    const [rows, setRows] = useState<IAgendamentosHospital[]>([]);

    const showValidationErrorModal = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast: { onmouseenter: any; onmouseleave: any; }) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "error",
            title: message
        });
    };

    const showValidationSucessoModal = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2100,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "success",
            title: message
        });
    };
    const idHospital = sessionStorage.getItem('fkHospital') ?? '';

    useEffect(() => {
        TarefasService.getAgendamentos(idHospital)
            .then((result) => {

                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setRows(result);
                }
            });
            
}, [pesquisa, setPesquisa]);


function agendaEscolhida(id: number): void {
    sessionStorage.setItem('idAgenda', id.toString());
    navegando('/perfil-funcionario/registro-doacao')
};

function baixarArquivo(): void {
    const result: any | ApiException = TarefasService.getAgendamentosCSV(idHospital);

    if (result) {
        showValidationSucessoModal("Arquivo baixado com sucesso")
    } else {
        showValidationErrorModal("Erro inesperado ao baixar arquivo. Faça login novamente.")

    }
}

return (
    <>
        <OndaLateralEsquerda />
        <main className='mainAgendaDoacao'>
            <MenuPerfilFuncionario nome="Diego" />
            <div className="divAgendaDoacao">
                <div className="AgendaDoacaoBox">
                    <h2 className="rowdies mr-bt">AGENDAMENTOS</h2>
                </div>
                <div className='AgendamentosBox'>
                    <div className='box'>
                        <h2 className="rowdies mr-bt">AGENDAMENTOS</h2>
                        <div className='agendamentos'>
                            {rows.map((vetor) => {
                                return <h3 onClick={() => agendaEscolhida(vetor.idAgenda)} className="btn_agenda roboto regular-20" key={vetor.idAgenda}>
                                    <p>Nome: {vetor.nome}</p>
                                    <p>CPF: {vetor.cpf}</p>
                                    <p>Data: {vetor.data}</p>
                                    <p>Hora: {vetor.hora}</p>
                                </h3>
                            })}
                        </div>
                    </div>
                    <button onClick={() => baixarArquivo()} className='button_csv btn bg-vermelhoClaro bold-30'>
                        Baixar arquivo Excel
                    </button>
                </div>
            </div>
        </main>
    </>
);
}

