import '../../../../html-css-template/css/Agendamento.css'

import { MenuPerfil } from "../../../shared/components";
import { OndaLateralEsquerda } from '../../../shared/components/OndaLateralEsquerda';

export const Agendamento = () => {
    return (
        <>
        <OndaLateralEsquerda />
            <div className="container">
                <MenuPerfil nome="Diego" />
                <div className="agenda">
                    <header className="clearfix">
                        <h1 className="rowdies">AGENDA</h1>
                    </header>
                    
                </div>
                <div className="confirmar">
                    <div className="escolha">
                        <h2 className="rowdies">HEMOCENTRO</h2>
                        <button className="btn roboto bg-vermelhoClaro">
                            Escolha um Hemocentro
                            <img src="" alt="" />
                        </button>
                    </div>
                    <div className="escolha margem">
                        <h2 className="rowdies">HORÁRIO</h2>
                        <button className="btn roboto bg-vermelhoClaro">
                            Escolha um Horário
                            <img src="" alt="" />
                        </button>
                    </div>
                    <div className="ok">
                        <button className="btn roboto bg-vermelhoClaro">
                            Agendar
                            <img src="../assets/BackArrow.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}