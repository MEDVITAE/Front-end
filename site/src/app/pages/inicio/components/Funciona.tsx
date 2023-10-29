import { vetorIcon } from "../../../shared/components/imagens";

export const Funciona = () => {
    return(
        <>
           <div className="funciona">
                <h1 className="rowdies">COMO FUNCIONA</h1>
                <h2 className="roboto regular-24">Novo Doador</h2>
                <div className="info">
                    <div className="imgInfo">
                        <img src={vetorIcon[3]} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={vetorIcon[2]} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={vetorIcon[4]} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={vetorIcon[5]} alt="" />
                    </div>
                </div>
                <div className="info">
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">1 - Cadastre-se</h2>
                        <p className="roboto regular-16">Você se cadastra com os seus</p>
                        <p className="roboto regular-16">dados e a cidade que prefere doar </p>
                        <p className="roboto regular-16">(todo Brasil).</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">2 - Agendamento</h2>
                        <p className="roboto regular-16">Agende sua doação escolhendo</p>
                        <p className="roboto regular-16">o local e a hora que mais facilite</p>
                        <p className="roboto regular-16">sua ida.</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">3- Receba um aviso</h2>
                        <p className="roboto regular-16">Nós enviaremos um e-mail ou</p>
                        <p className="roboto regular-16">SMS avisando quando faltar</p>
                        <p className="roboto regular-16">sangue na sua região.</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">4 - Doe Sangue</h2>
                        <p className="roboto regular-16">Um pequeno gesto</p>
                        <p className="roboto regular-16">que salva muitas</p>
                        <p className="roboto regular-16">vidas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}