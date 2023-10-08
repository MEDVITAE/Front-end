import '../../../../html-css-template/css/maps.css'

import { MenuPerfil } from "../../../shared/components";

export const Mapa = () => {
    return (
        <>
            <MenuPerfil nome="Diego"/>
            <div className="conteudo">
                <div className="rowdies topo">
                    <div className="titulo">
                        <h1>Ver mapa</h1>
                    </div>

                    <div className="selecionaCep roboto">
                        Informe seu CEP:
                        <input id="cep" placeholder="08332-394" />
                        <span //onclick="recuperaEndereco()">
                        ></span>
                        <button className="btn">Pesquisar</button>
                    </div>
                    <div className="logo">
                        <img src="../assets/LogoVitai.png" alt="" />
                    </div>
                </div>
                <div className="ondas">
                    <div className="waves">
                        <img src="../assets/ONDA - MAPA.svg" alt="" />
                    </div>
                </div>
                <div className="mapa">
                    <div className="map" id="map"></div>
                </div>
            </div>
        </>
    );
}