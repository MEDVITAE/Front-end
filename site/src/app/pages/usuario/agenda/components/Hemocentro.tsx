import { useEffect, useMemo, useState } from 'react';
import { InputPesquisa } from '../../../../shared/components';
import { IListagemHemocentro, TarefasService } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { useNavigate, useSearchParams } from 'react-router-dom';

import '../../../../../html-css-template/css/HemocentroEHorario.css';

interface IHemocentroProps {
    onChange: () => void;
}

export const Hemocentro: React.FC<IHemocentroProps> = ({ onChange }) => {
    const [pesquisa, setPesquisa] = useSearchParams();
    const [rows, setRows] = useState<IListagemHemocentro[]>([]);
    const history = useNavigate();

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

    useEffect(() => {
        {/*TarefasService.getAllHospital(pesquisa)
        .then((result) => {

            if (result instanceof Error) {
                alert(result.message);
            } else {
                console.log(result);

                setRows(result.data);
            }
        });*/}
        
    const resultadosFiltrados = vetorExemplo.filter((item) =>
        item.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setRows(resultadosFiltrados);
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
                            return <h3 className="hemo roboto regular-20" key={vetor.id}>
                                <p>Hemocentro: {vetor.nome}</p>
                                <p>CEP: {vetor.cep}</p>
                            </h3>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}