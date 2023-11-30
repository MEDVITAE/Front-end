import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IHistoricoAgendamento , TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';


export const HistoricoDoacao: React.FC = () => {

    const [historico, setHistorico] = useState<IHistoricoAgendamento[]>([]);
    const [idDaAgenda, setIdDaAgenda] = useState<string>(""); 

    useEffect(() => {
        const fetchData = async () => {

            try {
                // Chame a função que busca os dados usando o idDaAgenda
                const response = await TarefasService.getAllHistoricoAgendamento(idDaAgenda);
    
                // Verifique se a resposta não é um erro
                if (!(response instanceof Error)) {
                    setHistorico([response]);
                } else {
                    console.error(response.message);
                }
            } catch (error) {
                console.error('Erro ao buscar dados');
            }
        };
        // Chame a função fetchData quando o componente for montado ou quando idDaAgenda mudar
        fetchData();
    }, [idDaAgenda]);

   

    // const vetorExemplo = [
    //     {
    //         usuario: {
    //             id: 1,
    //             agenda: {
    //                 id: 2,
    //                 pontos: 5,
    //                 horaMarcada: {
    //                     id: 3,
    //                     hora: 9.30,
    //                 },
    //                 hospital: {
    //                     id: 4,
    //                     nome: 'São Camilo',
    //                     cep: '042444002'
    //                 }
    //             }
    //         }
    //     },
    //     {
    //         usuario: {
    //             id: 2,
    //             agenda: {
    //                 id: 1,
    //                 pontos: 5,
    //                 horaMarcada: {
    //                     id: 4,
    //                     hora: 10.00,
    //                 },
    //                 hospital: {
    //                     id: 1,
    //                     nome: 'Santa Cruz Azul',
    //                     cep: '042444000'
    //                 }
    //             }
    //         }
    //     },
    // ];

    // useEffect(() => {

    //     const rows = vetorExemplo.map((result) => ({
    //         id: result.usuario.id,
    //         agenda: {
    //             id: result.usuario.agenda.id,
    //             pontos: result.usuario.agenda.pontos,
    //             horaMarcada: {
    //                 id: result.usuario.agenda.horaMarcada.id,
    //                 hora: result.usuario.agenda.horaMarcada.hora,
    //             },
    //             hospital: {
    //                 id: result.usuario.agenda.hospital.id,
    //                 nome: result.usuario.agenda.hospital.nome,
    //                 cep: result.usuario.agenda.hospital.cep
    //             },
    //         }
    //     }));

    //     setHistorico(rows);
    // }, []);

    return (
        <>
            <div className="doacaoAnterior">
                <h2 className='rowdies'>HISTÓRICO</h2>
                {historico.map((historico) => {
                return <div className="doacao" key={historico.agenda.id}>
                     <div className="doacaoAtual bg-vermelhoClaro">
                        <div className="item">
                            <h2 className='roboto'>Doação n°: {historico.agenda.id}</h2>
                            <h2 className='roboto'>Pts: {historico.agenda.pontos}</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Data: {historico.agenda.horaMarcada.id}</h2>
                            <h2 className='roboto'>Hora: {historico.agenda.horaMarcada.hora}</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Hemocentro: {historico.agenda.hospital.nome}</h2>
                            <h2 className='roboto'>Local: {historico.agenda.hospital.cep}</h2>
                        </div>
                    </div>
                    <div className="caixaLitros">
                        <div className="litros">
                            <h3 className='roboto'>Parabéns</h3>
                            <h2 className='roboto'>Vida Salva</h2>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </>
    );
}
