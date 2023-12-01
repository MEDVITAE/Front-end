import { useCallback, useEffect, useState } from "react";
import { TarefasService } from "../../../../shared/sevice/api/tarefas/TarefasService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ProximaDoacao = () => {

    const navegando = useNavigate();

    const tokenSession = sessionStorage.getItem('token');
    const idAgendamento = sessionStorage.getItem('idAgendamento');

    const [horario, setHorario] = useState('');
    const [data, setData] = useState('');
    const [hemo, setHemo] = useState('');
    const [rua, setRua] = useState('');

    const horarioSession = sessionStorage.getItem('horario');
    const dataSession = sessionStorage.getItem('data');
    const hemoSession = sessionStorage.getItem('hemo');
    const ruaSession = sessionStorage.getItem('rua');

    const showConfirmUpdate = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "info",
            title: message
        });
    };

    const showDelete = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
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

    const showErrorNetwork = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "error",
            title: message
        });
    };

    const deletarAgendamento = useCallback((id: string) => {
        alert(idAgendamento ? idAgendamento : '');
        TarefasService.deleteByIdAgedamento(id, tokenSession ? tokenSession : '')
            .then((result) => {
                if (result instanceof Error) {
                    if (result.message === "Request failed with status code 400") {
                        showDelete("Agendamento anterior apagado. Recarregue a página.");
                        sessionStorage.removeItem('horario');
                        sessionStorage.removeItem('data');
                        sessionStorage.removeItem('hemo');
                        sessionStorage.removeItem('rua');
                        sessionStorage.removeItem('idAgendamento');
                    } else {
                        showErrorNetwork(result.message + ", aguarde.");
                    }
                }
            }
            );
    }, []);

    const alterarAgendamento = useCallback(async (id: string) => {
        deletarAgendamento(id);
        showConfirmUpdate("Alternando para página de Agenamento, escolha um novo dia, hemocentro e horário para doar.");
        await new Promise(resolve => setTimeout(resolve, 3000));
        navegando("/perfil-usuario/agendamento");
    }, []);

    useEffect(() => {
        if (!horarioSession) {
            showConfirmUpdate("Recarregue a página, quem sabe você já tinha uma doação agendada.")
            setHorario('00:00');
            setData('00/00/0000');
            setHemo('sem hospital');
            setRua('sem logradouro');
        } else {
            setHorario(horarioSession || '00:00');
            setData(dataSession || '00/00/0000');
            setHemo(hemoSession || 'sem hospital');
            setRua(ruaSession || 'sem logradouro');
        }
    }, []);

    return (
        <>
            <div className="proximaDoacao">
                <h2 className='rowdies'>PRÓXIMA DOAÇÃO</h2>
                <div className="doacao">
                    <div className="doacaoAtual bg-vermelhoClaro">
                        <div className="item">
                            <h2 className='roboto'>Pts: 000</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Data: {data}</h2>
                            <h2 className='roboto'>Hora: {horario}</h2>
                        </div>

                        <div className="item">
                            <h2 className='roboto'>Hemocentro: {hemo}</h2>
                            <h2 className='roboto'>Local: {rua}</h2>
                        </div>
                    </div>
                    <div className="botaoDoacao">
                        <button onClick={() => alterarAgendamento(idAgendamento ? idAgendamento.toString() : '')} className='btn bg-azulClaro roboto'>Alterar Agendamento</button>
                        <button onClick={() => deletarAgendamento(idAgendamento ? idAgendamento.toString() : '')} className='btn bg-azulClaro roboto'>Cancelar Agendamento</button>
                    </div>
                </div>
            </div>
        </>
    );
};