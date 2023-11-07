import { useCallback, useState } from 'react';
import '../../../../html-css-template/css/Agendamento.css'
import { MenuPerfil, OndaLateralEsquerda } from '../../../shared/components';
import { vetorIcon } from '../../../shared/components/imagens';
import { Agenda } from './component/Agenda';
import { useNavigate } from 'react-router-dom';

export const Agendamento = () => {
    const [hospital, setHospital] = useState('');
    const [hora, setHora] = useState('');

    const navegando = useNavigate();
    sessionStorage.getItem('data');

    const hospitalChange = ((newValue: string)  =>{
        setHospital(newValue);
    });

    const agendar = useCallback(() =>{
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
                </div>
                <div className="confirmar">
                    <div className="escolha">
                        <h2 className="rowdies">HEMOCENTRO</h2>
                        <button className="btn roboto bg-vermelhoClaro">
                            Escolha um Hemocentro
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                    <div className="escolha margem">
                        <h2 className="rowdies">HORÁRIO</h2>
                        <button className="btn roboto bg-vermelhoClaro">
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