import Imagem  from '../../../../html-css-template/assets/LogoVitai.png';

export const FacaParte = () => {
    return(
        <>
         <div className="facaParte">
                <h1 className="rowdies">Faça parte e salve vidas</h1>
                <button className="btn bg-vermelhoClaro roboto regular-16">
                    Quero ser Doador
                    <img src="../assets/BackArrow.png" alt="" />
                </button>
                <img src="../assets/WorldBloodDonorDayPNG.png" alt="" />
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