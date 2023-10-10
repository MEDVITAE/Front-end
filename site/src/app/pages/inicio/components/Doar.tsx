import  Icon  from '../../../../html-css-template/assets/CheckAll.png';
import  Imagem  from '../../../../html-css-template/assets/TuboEnsaio.png';

export const Doar = () =>{
    return(
        <>
         <div className="doar">
                <h1 className="rowdies">COMO DOAR</h1>
                <div className="conteudoDoar">
                    <div>
                        <li className="regular-14 roboto">
                            <img src={Icon} alt="" />
                            Apresentar documento com foto(RG, CNH, etc);
                        </li>
                        <li className="regular-14 roboto">
                            <img src={Icon} alt="" />
                            Pesar no mínimo 50kg;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={Icon} alt="" />
                            Estar bem de saúde, sem nenhum sintoma;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={Icon} alt="" />
                            Não ter feito ingestão de bebiba alcoólica nas últimas 12 horas;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={Icon} alt="" />
                            Precisa ter mais de 18 anos.
                        </li>
                    </div>
                    <div className="imgTuboEnsaio">
                        <img src={Imagem} alt="" />
                    </div>
                </div>
                <button className="btn bg-vermelhoClaro roboto regular-16">
                    Saiba mais
                    <img src="../assets/BackArrow.png" alt="" />
                </button>
            </div>
        </>
    );
}