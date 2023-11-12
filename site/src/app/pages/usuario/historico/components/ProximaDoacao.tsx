import { useCallback, useEffect, useState } from "react";
import { IHistoricoAgendamento, TarefasService } from "../../../../shared/sevice/api/tarefas/TarefasService";
import { useNavigate } from "react-router-dom";

export const ProximaDoacao = () => {
    const [agenda, setAgenda] = useState<IHistoricoAgendamento>();

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
        },
        {
            usuario: {
                idUsuario: 2,
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
        },
    ];

    useEffect(() => {
        {/*TarefasService.getByIdHistoricoAgendamentoAtual(vetorExemplo[0].usuario.idUsuario);*/ }

        setAgenda({
            idUsuario: vetorExemplo[0].usuario.idUsuario,
            horaMarcada: {
                id: vetorExemplo[0].usuario.horaMarcada.idHora,
                hora: vetorExemplo[0].usuario.horaMarcada.hora,
            },
            hospital: {
                id: vetorExemplo[0].usuario.hospital.idHospital,
                nome: vetorExemplo[0].usuario.hospital.nome,
                cep: vetorExemplo[0].usuario.hospital.cep
            },
        });

        setData(0);
        setHora(agenda?.horaMarcada.hora);
        setHemocentro(agenda?.hospital.nome);
        setLocal(agenda?.hospital.cep);
        setCep(agenda?.hospital.cep);

    }, [agenda]);

    const deletarAgendamento = useCallback(() => { 
        
    }, []);
    const alterarAgendamento = useCallback(() => {
        deletarAgendamento();
        navegando("/perfil-usuario/agendamento")
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
                        <button onClick={alterarAgendamento} className='btn bg-azulClaro roboto'>Alterar Agendamento</button>
                        <button onClick={deletarAgendamento} className='btn bg-azulClaro roboto'>Cancelar Agendamento</button>
                    </div>
                </div>
            </div>
        </>
    );
};