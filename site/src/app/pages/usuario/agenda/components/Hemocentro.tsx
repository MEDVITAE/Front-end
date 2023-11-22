import { useCallback, useEffect, useMemo, useState } from 'react';
import { InputPesquisa } from '../../../../shared/components';
import { IListagemHemocentro, ITokenId, TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { useNavigate, useSearchParams } from 'react-router-dom';

import '../../../../../html-css-template/css/HemocentroEHorario.css';
import Swal from 'sweetalert2';

interface IHemocentroProps {
    onChange: () => void;
}

export const Hemocentro: React.FC<IHemocentroProps> = ({ onChange }) => {
    const [pesquisa, setPesquisa] = useSearchParams();
    const [rows, setRows] = useState<IListagemHemocentro[]>([]);

    const history = useNavigate();

    const tokenSession = sessionStorage.getItem('token');

    const showChosenHemocentro = (message: string) => {
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

    const vetorExemplo = [
        { id: 1, nome: 'Santa Cruz Azul', cep: '042444000' },
        { id: 2, nome: 'São Luiz', cep: '042444001' },
        { id: 3, nome: 'São Camilo', cep: '042444002' },
        { id: 4, nome: 'São Camilo', cep: '042444002' },
        { id: 5, nome: 'São Camilo', cep: '042444002' }
    ]

    const busca = useMemo(() => {
        return pesquisa.get('busca') || '';
    }, [pesquisa]);

    const hemocentroEscolhido = useCallback((id: number) => {
        if (id !== null && id !== undefined) {
            showChosenHemocentro("Hemocentro definido, agora defina um horário.")
            sessionStorage.setItem('hemocentro', id.toString());
        }
    }, []);

    useEffect(() => {
        TarefasService.getAllHospital(pesquisa.toString(), tokenSession ? tokenSession : '')
        .then((result) => {

            if (result instanceof Error) {
                alert(result.message);
            } else {
                console.log(result);

                setRows(result.data.filter((item) =>
                item.nome.toLowerCase().includes(busca.toLowerCase())
            ));
            }
        });

       {/* const resultadosFiltrados = vetorExemplo.filter((item) =>
            item.nome.toLowerCase().includes(busca.toLowerCase())
        );
       setRows(resultadosFiltrados);*/}
    }, [pesquisa, setPesquisa]);

    return (
        <>
            <div className="caixaHemo">
                <div className="formularioAgenda">
                    <div className="headerHomo">
                        <h1 className="rowdies">HEMOCENTRO</h1>
                        <button className="btnFechar bg-azulClaro" onClick={onChange}>
                            <p className="roboto sbold-24">x</p>
                        </button>
                    </div>

                    <div className="caixaPesquisa">
                        <InputPesquisa
                            className={"inputPesquisar"}
                            placeholder={"Pesquisar..."}
                            aoMudarTextoDeBusca={(texto) => {
                                setPesquisa({ busca: texto }, { replace: true });
                                history(`?busca=${texto}`);
                            }}
                        />
                    </div>
                    <div className="historicoAgenda">
                        {rows.map((vetor) => {
                            return <h3 onClick={() => hemocentroEscolhido(vetor.idHospital)} className="hemo roboto regular-20" key={vetor.idHospital}>
                                <p>Hemocentro: {vetor.nome}</p>
                                <p>CEP:</p>
                            </h3>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}