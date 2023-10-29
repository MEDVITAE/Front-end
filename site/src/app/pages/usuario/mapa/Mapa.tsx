import '../../../../html-css-template/css/maps.css'
//import '../../../../js/maps.js'
import './test'

import { MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";
import { useEffect } from 'react';
import { initMap } from './test';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Mapa = () => {
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const defaultCenter = {
        lat: -23.537748,
        lng: -46.461309,
    };

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
                        <LoadScript googleMapsApiKey="AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8">
                            <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={10}
                                center={defaultCenter}
                            ></GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </>
    );
}