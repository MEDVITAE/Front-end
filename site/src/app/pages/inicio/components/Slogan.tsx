import { useNavigate } from "react-router-dom";
import { vetorImg } from "../../../shared/components/imagens";
import { vetorIcon } from "../../../shared/components/imagens";

export const Slogan = () =>{
    const navegando = useNavigate();

    const navegarClick = () => {
        navegando("/cadastro-usuario");
    }

    return(
        <>
        <div className="slogan">
                <img className="imgPessoas" src={vetorImg[8]} alt="" />
                <div className="textoSlogan">
                    <div>
                        <h1 className="rowdies regular-64">Doe sangue</h1>
                        <h1 className="rowdies regular-64">Doe vida.</h1>
                        <p className="roboto regular-24">Transfusões de sangue fazem a</p>
                        <p className="roboto regular-24">diferença entre a vida e a morte</p>
                        <p className="roboto regular-24">para centenas de pacientes</p>
                        <p className="roboto regular-24">todos os dias.</p>
                    </div>
                    <button onClick={navegarClick} className="btn bg-vermelhoClaro regular-16">
                        Quero ser um doador
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}