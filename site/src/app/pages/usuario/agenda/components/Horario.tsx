import '../../../../../html-css-template/css/HemocentroEHorario.css'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { IAgenda, TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { ApiException } from '../../../../shared/sevice/api/ApiException';

interface IHorarioProps {
    onChange: () => void;
}

export const Horario: React.FC<IHorarioProps> = ({ onChange }) => {
    const [horario, setHorario] = useState<string>('');
    const [horarioIndisponivel, setHorarioIndisponivel] = useState<IAgenda[]>([]);

    const [horaOcupada, setHoraOcupada] = useState<Set<string>>(new Set());

    sessionStorage.setItem('hora', horario);
    const tokenSession = sessionStorage.getItem('token');
    const idHemoSession = sessionStorage.getItem('hemocentro');

    const vetorHora = [
        {
            id: 1,
            hora: '08:30'
        },
        {
            id: 2,
            hora: '09:00'
        },
        {
            id: 3,
            hora: '09:30'
        },
        {
            id: 4,
            hora: '10:00'
        },
        {
            id: 5,
            hora: '10:30'
        },
        {
            id: 6,
            hora: '11:00'
        },
        {
            id: 7,
            hora: '11:30'
        },
        {
            id: 8,
            hora: '13:00'
        },
        {
            id: 9,
            hora: '13:30'
        },
        {
            id: 10,
            hora: '14:00'
        },
        {
            id: 11,
            hora: '14:30'
        },
        {
            id: 12,
            hora: '15:00'
        },
    ];

    const showChosenTime = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
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

    const showChosenWrongTime = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
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

    useEffect(() => {
        TarefasService.getAllHistoricoAgendamento(tokenSession ? tokenSession : '')
            .then((result) => {
                if (result instanceof ApiException) {
                    showChosenWrongTime("Erro ao carregar os horários disponíveis")
                }
                else {
                    setHorarioIndisponivel(result.data.filter((item) => item.fkHospital === parseInt(idHemoSession || '', 10)));
                }
            });

        setHoraOcupada(new Set(horarioIndisponivel.map((item) => {
            const hora = new Date(item.horario);
            return (hora.getHours() < 10 ? '0' : '') + hora.getHours() + ':' + (hora.getMinutes() < 10 ? '0' : '') + (hora.getMinutes());
        })));

    }, [tokenSession, idHemoSession]);

    const handleHorarioClick = (hora: string, validacao: string) => {
        if (validacao === 'disponivel') {
            setHorario(hora);
            showChosenTime("Agora, finalize selecionando o botão de agendar.");
        } else {
            showChosenWrongTime("Horário indisponível, selecione outro.");
        }
    };


    return (
        <>
            <div className="caixaHemo">
                <div className="formularioAgenda">
                    <div className="headerHomo">
                        <h1 className="rowdies">HORÁRIO</h1>
                        <button className="btnFechar bg-azulClaro" onClick={onChange}>
                            <p className="roboto sbold-24">x</p>
                        </button>
                    </div>
                    <div className="divisor">
                        <span className='linhaDivisoria'></span>
                    </div>
                    <div className="historicoHorario">
                        {vetorHora.map((vetor) => {
                            const isHorarioOcupado = horarioIndisponivel.some((item) => {
                                const hora = new Date(item.horario);
                                const horaFormatada = `${hora.getHours() < 10 ? '0' : ''}${hora.getHours()}:${(hora.getMinutes() < 10 ? '0' : '')}${hora.getMinutes()}`;
                                return horaFormatada === vetor.hora;
                            });

                            return <div className='caixaHora' key={vetor.id}>
                                <h3
                                    onClick={() => handleHorarioClick(vetor.hora, isHorarioOcupado ? 'indisponivel' : 'disponivel')}
                                    className={`hora roboto regular-20 ${isHorarioOcupado ? 'indisponivel' : 'disponivel'}`}
                                >
                                    <p>{vetor.hora}h</p>
                                </h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}