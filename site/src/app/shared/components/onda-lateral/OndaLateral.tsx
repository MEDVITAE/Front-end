import { vetorImg } from "../imagens";
import '../../../../html-css-template/css/geral.css'

export const OndaLateralEsquerda = () => {
    return (
        <>
            <div className="bg-imgOndaLogo">
                <img className="imgRetangulo" src={vetorImg[6]} alt="" />
                <img className="logoPerfil" src={vetorImg[3]} alt="" />
            </div>
        </>
    );
}