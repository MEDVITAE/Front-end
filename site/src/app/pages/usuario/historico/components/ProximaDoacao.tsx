import { useCallback, useEffect, useState } from "react";
import { IHistoricoDeAgendamento, TarefasService } from "../../../../shared/sevice/api/tarefas/TarefasService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiException } from "../../../../shared/sevice/api/ApiException";
import { de } from "date-fns/locale";

export const ProximaDoacao = () => {
    const [agenda, setAgenda] = useState<IHistoricoDeAgendamento>();

    const [data, setData] = useState<number>();
    const [hora, setHora] = useState<number>();
    const [hemocentro, setHemocentro] = useState<string>();
    const [local, setLocal] = useState<string>();
    const [cep, setCep] = useState<string>();

    const navegando = useNavigate();

    const vetorExemplo = [
        {
            usuario: {
                idUsuario: 1,
                agenda: {
                    id: 2,
                    pontos: 5,
                    horaMarcada: {
                        idHora: 3,
                        hora: 9.30,
                    },
                    hospital: {
                        idHospital: 4,
                        nome: 'São Camilo',
                        cep: '042444002'
                    }
                }
            }
        },
        {
            usuario: {
                idUsuario: 2,
                agenda: {
                    id: 1,
                    pontos: 5,
                    horaMarcada: {
                        idHora: 4,
                        hora: 10.00,
                    },
                    hospital: {
                        idHospital: 1,
                        nome: 'Santa Cruz Azul',
                        cep: '042444000'
                    }
                }
            }
        },
    ];

  //  useEffect(() => {
  //      {/*TarefasService.getByIdHistoricoAgendamentoAtual(vetorExemplo[0].usuario.idUsuario);*/ }
//
//  //      setAgenda({
//  //          id: vetorExemplo[0].usuario.idUsuario,
//  //          agenda: {
//  //              id: 0,
//  //              pontos: 0,
//  //              horaMarcada: {
  //                  id: vetorExemplo[0].usuario.agenda.horaMarcada.idHora,
  //                  hora: vetorExemplo[0].usuario.agenda.horaMarcada.hora,
  //              },
  //              hospital: {
  //                  idHospital: vetorExemplo[0].usuario.agenda.hospital.idHospital,
  //                  nome: vetorExemplo[0].usuario.agenda.hospital.nome,
  //              },
  //          }
  //      });
//
  //      setData(0);
  //      setHora(agenda?.agenda.horaMarcada.hora);
  //      setHemocentro(agenda?.agenda.hospital.nome);
//
  //  }, []);

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

    const deletarAgendamento = useCallback((id: number) => {
        TarefasService.deleteByIdAgedamento(id)
            .then((result) => {
                if (result instanceof ApiException) {
                    showErrorNetwork(result.message + ", aguarde.");
                }
                else {
                    showDelete("Agendamento anterior apagado.");
                }
            }
            );
    }, []);

    const alterarAgendamento = useCallback(async (id: number) => {
        deletarAgendamento(id);
        showConfirmUpdate("Alternando para página de Agenamento, escolha um novo dia, hemocentro e horário para doar.");
        await new Promise(resolve => setTimeout(resolve, 3000));
        navegando("/perfil-usuario/agendamento");
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
                            <h2 className='roboto'>Hora: {hora}</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Hemocentro: {hemocentro}</h2>
                            <h2 className='roboto'>Local: {local}</h2>
                        </div>
                    </div>
                    <div className="botaoDoacao">
                        <button onClick={() => alterarAgendamento(vetorExemplo[0].usuario.idUsuario)} className='btn bg-azulClaro roboto'>Alterar Agendamento</button>
                        <button onClick={() => deletarAgendamento(vetorExemplo[0].usuario.idUsuario)} className='btn bg-azulClaro roboto'>Cancelar Agendamento</button>
                    </div>
                </div>
            </div>
        </>
    );
};