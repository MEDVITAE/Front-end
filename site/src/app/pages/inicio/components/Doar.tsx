import { useNavigate } from "react-router-dom";
import { vetorImg } from "../../../shared/components/imagens";
import { vetorIcon } from "../../../shared/components/imagens";

export const Doar = () => {

    const navegando = useNavigate();

    const navegarClick = () => {
        navegando("/pagina-inicial/saiba-mais");
    }

    return (
        <>
            <div className="comoDoar">
                <h1 className="rowdies">COMO DOAR</h1>
                <div className="conteudoDoar">
                    <div>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Apresentar documento com foto(RG, CNH, etc);
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Pesar no mínimo 50kg;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Estar bem de saúde, sem nenhum sintoma;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Não ter feito ingestão de bebiba alcoólica nas últimas 12 horas;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Precisa ter mais de 18 anos.
                        </li>
                    </div>
                    <div className="imgTuboEnsaio">
                        <img src={vetorImg[11]} alt="" />
                    </div>
                </div>
                <button onClick={navegarClick} className="btn bg-vermelhoClaro roboto regular-16">
                    Saiba mais
                    <img src={vetorIcon[0]} alt="" />
                </button>
            </div>
        </>
    );
}