import '../../../html-css-template/css/homocentro.css'

export const CadastroEmpresa = () => {
    return (
        <>
            <div className="img2">
                <img src="../assets/ONDA - CADASTRO.svg" alt="" />
            </div>
            <header className='header4'>
                <div className="componente">
                    <img src="../assets/LogoVitai.png" alt="Vitae" />
                    <a href="">Home</a>
                </div>

                <div className="nextPage3">
                    <div>
                        <h3>Já tem conta ?</h3>
                        <h3>Então vamos logar!</h3>
                    </div>

                    <button className="btn logar bold-20">
                        Logar
                        <img src="../assets/BackArrow.png" alt="" />
                    </button>
                </div>
            </header>

            <div className="container">
                <div className="formulario">
                    <div className="cadastro">
                        <h1>Cadastre-se</h1>
                        <h1 className="text-title">Bem vindo!!</h1>
                        <h1 className="text-title">Cadastre as informações do homocentro</h1>
                    </div>
                    <div className="inputs">
                        <input className="input-size" type="text" placeholder="CEP" />
                        <input className="input-size" type="text" placeholder="Número" />
                        <input className="input-size" type="text" placeholder="Logradouro" />
                        <input className="input-size" type="text" placeholder="Complemento" />
                        <div className="button">
                            <button className="btn cadastrar bold-20" >
                                Cadastrar
                                <img src="../assets/BackArrow.png" alt="" />
                            </button>

                        </div>
                    </div>
                </div>
                <img className="imgDoe" src="../assets/ilustracao-aos-bancos-de-sangue-reduzida 3.png" alt="" />
            </div>
        </>
    );
}