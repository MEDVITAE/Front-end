import { useNavigate, useSearchParams } from 'react-router-dom';
import '../../../../../html-css-template/css/HemocentroEHorario.css'
import { IListagemDeHorarioDisponivel, IListagemHemocentro } from '../../../../shared/sevice/api/tarefas/TarefasService';
import { useCallback, useEffect, useState } from 'react';

interface IHorarioProps {
    onChange: () => void;
}

export const Horario: React.FC<IHorarioProps> = ({ onChange }) => {
    const [status, setStatus] = useState<'(Disponível)' | '(Indisponível)'>();

    const vetorHora = [
        {
            id: 1,
            hora: 8.30
        },
        {
            id: 2,
            hora: 9.00
        },
        {
            id: 3,
            hora: 9.30
        },
        {
            id: 4,
            hora: 10.00
        },
        {
            id: 5,
            hora: 10.30
        },
        {
            id: 6,
            hora: 11.00
        },
        {
            id: 7,
            hora: 11.30
        },
        {
            id: 8,
            hora: 13.00
        },
        {
            id: 9,
            hora: 13.30
        },
        {
            id: 10,
            hora: 14.00
        },
        {
            id: 11,
            hora: 14.30
        },
        {
            id: 12,
            hora: 15.00
        },
    ];

    const vetorExemplo = [
        {
            id: 1,
            hora: 8.30,
            hospital: [
                {
                    idHospital: 1,
                    nome: 'Santa Cruz Azul',
                    cep: '042444000'
                },
                {
                    idHospital: 2,
                    nome: 'São Luiz',
                    cep: '042444001'
                }
            ]
        },
        {
            id: 2,
            hora: 11.00,
            hospital: {
                idHospital: 2,
                nome: 'São Luiz',
                cep: '042444001'
            }
        },
        {
            id: 3,
            hora: 9.30,
            hospital: {
                idHospital: 3,
                nome: 'São Camilo',
                cep: '042444002'
            }
        },
        {
            id: 4,
            hora: 13.00,
            hospital: {
                idHospital: 4,
                nome: 'São Camilo',
                cep: '042444002'
            }
        },
        {
            id: 5, hora: 14.30,
            hospital: {
                idHospital: 5,
                nome: 'São Camilo',
                cep: '042444002'
            }
        }
    ];

    const horarioIndisponivel = (hora: number) => {
        {/* Método find retornará o primeiro item em que a condição retorne verdadeira */ }
        const horarioDisponivel = vetorExemplo.find((item) => item.hora === hora);

        if (horarioDisponivel) {
            return '(Indisponível)';
        } else {
            return '(Disponível)';
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
                            return <div className="caixaHora">
                                <h3 className="hora roboto regular-20" key={vetor.id}>
                                    <p>{vetor.hora}h</p>
                                    <p>{horarioIndisponivel(vetor.hora)}</p>
                                </h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}