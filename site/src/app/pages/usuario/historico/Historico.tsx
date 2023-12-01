import { MenuPerfilUsuario, OndaLateralEsquerda } from '../../../shared/components';
import { HistoricoDoacao } from './components/HistoricoDoacao';
import { ProximaDoacao } from './components/ProximaDoacao';

import '../../../../html-css-template/css/HistoricoDoacao.css';

export const Historico = () => {

    return (
        <>
            <OndaLateralEsquerda />
            <div className="historico">
                <MenuPerfilUsuario nome="Diego" />
                <div className="historicoConteudo">
                    <ProximaDoacao />
                    <HistoricoDoacao />
                </div>
            </div>
        </>
    );
}