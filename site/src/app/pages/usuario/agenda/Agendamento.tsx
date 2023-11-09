import '../../../../html-css-template/css/Agendamento.css'

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Agenda } from './components/Agenda';
import { Horario } from './components/Horario';
import { Hemocentro } from './components/Hemocentro';
import { vetorIcon } from '../../../shared/components/imagens';
import { MenuPerfil, OndaLateralEsquerda } from '../../../shared/components';

export const Agendamento = () => {
    const [isMostrarHemo, setIsMostrarHemo] = useState(false);
    const [isMostrarHora, setIsMostrarHora] = useState(false);

    {/* Dado vindo de "Agenda.tsx" */}
    sessionStorage.getItem('data');
    const navegando = useNavigate();

    const mostrarComponenteHemo = () => {
        setIsMostrarHemo(true);
    }

    const fecharComponenteHemo = () => {
        setIsMostrarHemo(false);
    }

    const mostrarComponenteHora = () => {
        setIsMostrarHora(true);
    }

    const fecharComponenteHora = () => {
        setIsMostrarHora(false);
    }

    const agendar = useCallback(() => {
        sessionStorage.getItem('data');

        alert("Agendamento realizado com sucesso");
        navegando("/perfil-usuario/historico")
    }, []);

    

    return (
        <>
            <OndaLateralEsquerda />
            <div className="container">
                <MenuPerfil nome="Diego" />
                <div className="agenda">
                    <header className="tituloAgenda">
                        <h1 className="rowdies">AGENDA</h1>
                    </header>
                    <Agenda />
                    {isMostrarHemo &&
                       <Hemocentro onChange={fecharComponenteHemo} />
                    }
                    {isMostrarHora &&
                        <Horario onChange={fecharComponenteHora} />
                    }
                </div>
                <div className="confirmar">
                    <div className="escolha">
                        <h2 className="rowdies">HEMOCENTRO</h2>
                        <button onClick={mostrarComponenteHemo} className="btn roboto bg-vermelhoClaro">
                            Escolha um Hemocentro
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                    <div className="escolha margem">
                        <h2 className="rowdies">HORÁRIO</h2>
                        <button onClick={mostrarComponenteHora} className="btn roboto bg-vermelhoClaro">
                            Escolha um Horário
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                    <div className="ok">
                        <button className="btn roboto bg-vermelhoClaro" onClick={agendar}>
                            Agendar
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}