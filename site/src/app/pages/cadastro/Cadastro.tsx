import '../../../html-css-template/css/Cadastro.css'

export const Cadastro = () => {
    return(
        <>
         <div className="img">
        <img src="../assets/ONDA - CADASTRO.svg" alt=""  />
    </div>
  
    <header>
        <div className="componente">
            <img src="../assets/LogoVitai.png" alt="Vitae"  />
            <a href="">Home</a>
        </div>

        <div className="nextPage">
            <div>
                <h3>Já tem conta ?</h3>
                <h3>Então vamos logar!</h3>
            </div>

            <button className="btn logar bold-20" >
                Logar
                <img src="../assets/BackArrow.png" alt="" />
            </button>
        </div>
    </header>

    <div className="container">
        <div className="formulario">
            <div className="cadastro" >
                <h1>Cadastre-se</h1>
                    <h1 className="text-title">Bem vindo!!</h1>
                <h1 className="text-title">Cadastre suas informações pessoais</h1>
            </div>
            <div className="inputs">
                <input className="input-size" type="text" placeholder="Email" />
                <input className="input-size" type="text" placeholder="Senha" />
                <input className="input-size" type="text" placeholder="Confirmar senha" />
            </div>
            <div className="button">
                <button className="btn cadastrar bold-20" >
                    Cadastrar
                    <img src="../assets/BackArrow.png" alt="" />
                </button>
            </div>
        </div>


        <img className="imgDoe" src="../assets/WorldBloodDonorDay.png" alt=""  />


    </div>
        </>
    );
}