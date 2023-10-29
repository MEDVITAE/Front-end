import '../../../../html-css-template/css/maps.css'
import '../../../../js/maps.js'

import { MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";

export const Mapa = () => {
    return (
        <>
            <OndaLateralEsquerda />
            <div className="conteudo1">
                <MenuPerfil nome="Diego" />
                <div className="mapaMundi">
                    <div className="rowdies topo">
                        <div className="titulo">
                            <h1>Ver mapa</h1>
                        </div>

                        <div className="selecionaCep roboto">
                            Informe seu CEP:
                            <input id="cep" placeholder="08332-394" />
                            <span //onClick="recuperaLagLog()">
                            ></span>
                            <button className="btn">Pesquisar</button>
                        </div>
                        <div className="logo">
                            <img src="../assets/LogoVitai.png" alt="" />
                        </div>
                    </div>
                    <div className="mapa">
                        <div className="map" id="map"></div>
                    </div>
                </div>
            </div>
        </>
    );
}