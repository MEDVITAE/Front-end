import { useNavigate } from "react-router-dom";
import { vetorImg } from "../../../shared/components/imagens";
import { vetorIcon } from "../../../shared/components/imagens";

export const FacaParte = () => {

    const navegando = useNavigate();

    const navegarClick = () => {
        navegando("/cadastro-usuario");
    }

    return(
        <>
         <div className="facaParte">
                <h1 className="rowdies">Faça parte e salve vidas</h1>
                <button onClick={navegarClick} className="btn bg-vermelhoClaro roboto regular-16">
                    Quero ser Doador
                    <img src={vetorIcon[0]} alt="" />
                </button>
                <img src={vetorImg[14]} alt="" />
                <h2 className="roboto">Saiba mais Sobre </h2>
                <p className="poppins">Envie seu E-mail para saber tudo sobre a doação</p>
                <div className="saibaMais">
                    <input className="poppins bg-azulEscuro ipt" type="text" placeholder="Email" />
                    <button className="btn2 roboto bg-vermelhoClaro poppins">Saiba mais</button>
                </div>
            </div>
        </>
    );
}