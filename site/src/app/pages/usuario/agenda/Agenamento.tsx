import '../../../../html-css-template/css/Agendamento.css'

import { MenuPerfil } from "../../../shared/components";

export const Agendamento = () =>{
    return(
        <>
         <div className="imgOnda">
        <img className="imgOndaDentro" src="../assets/ONDA - MAPA 2.svg" alt="" />
    </div>
    <div className="container">
       <MenuPerfil nome="Diego"/>
        <div className="agenda">
            <header className="clearfix">
                <h1 className="rowdies">AGENDA</h1>
            </header>
            <section>
                <div className="main">
                    <div className="custom-calendar-wrap">
                        <div id="custom-inner" className="custom-inner">
                            <div className="custom-header bg-vermelhoClaro clearfix">
                                <nav>
                                    <span id="custom-prev" className="custom-prev"></span>
                                    <span id="custom-next" className="custom-next"></span>
                                </nav>
                                <h2 id="custom-month" className="custom-month rowdies"></h2>
                                <h3 id="custom-year" className="custom-year rowdies"></h3>
                            </div>
                            <div id="calendar" className="fc-calendar-container roboto"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="confirmar">
            <div className="imgLogo">
                <img className="logo" src="../assets/LogoVitai.png" alt="" />
            </div>
            <div className="escolha">
                <h2 className="rowdies">HEMOCENTRO</h2>
                <button className="btn roboto bg-vermelhoClaro">
                    Escolha um Hemocentro
                    <img src="" alt="" />
                </button>
            </div>
            <div className="escolha">
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