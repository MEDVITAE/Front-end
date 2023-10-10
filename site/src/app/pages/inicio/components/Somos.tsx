import  Imagem  from '../../../../html-css-template/assets/calendario.svg';

export const Somos = () => {
    return(
        <>
        <div className="somos bg-azulEscuro">
                <h1 className="rowdies">QUEM SOMOS</h1>
                <div>
                    <div className="calendario">
                        <img src={Imagem} alt="" />
                        <h2 className="rowdies">AGENDAMENTO</h2>
                    </div>
                    <div className="proposta ">
                        <div className="propostaTexto bg-branco">
                            <div className="proText">
                                <h2 className="rowdies">PROPOSTA</h2>
                                <p className="roboto regular-20">Doar sangue é um ato de solidariedade e amor ao próximo. </p>
                                <p className="roboto regular-20">Muitas vidas dependem desse gesto, que pode salvar até</p>
                                <p className="roboto regular-20">quatro pessoas com uma única doação. No entanto, muitas</p>
                                <p className="roboto regular-20">pessoas deixam de doar por falta de informação, medo ou</p>
                                <p className="roboto regular-20">dificuldade de acesso aos hemocentros.</p>
                                <p className="roboto regular-20">Pensando nisso, criamos o site VITAE, uma plataforma </p>
                                <p className="roboto regular-20">online que tem como objetivo facilitar o agendamento de</p>
                                <p className="roboto regular-20">doação de sangue, conectando doadores e receptores de</p>
                                <p className="roboto regular-20">forma rápida e segura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}