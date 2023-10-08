import '../../../html-css-template/css/login.css'

export const Login = () =>{
    return(
        <>
         <header>
        <div className="nextPage roboto">
            <div>
                <h3>Ainda não tem conta?</h3>
                <h3>Então vamos cadastrar!</h3>
            </div>
            <button className="btn cadastrar" >
                Cadastro
                <img src="../assets/BackArrow.png" alt="" />
            </button>
        </div>
        <div className="componente">
            <a href="">Home</a>
            <img src="../assets/LogoVitai.png" alt="Vitae" />
        </div>
    </header>
    
    <div className="container">
        <div className="imgDoadores">
        <img src="../assets/WorldBloodDonorDay.png" alt="" />;
        </div>
        <div className="formulario">
            <h1>LOGIN</h1>
            <p className="textInt">Bem-Vindo de volta!!</p>
            <p className="textInt">Logue com suas informações pessoais</p>
            <input className="" type="text" placeholder="Email" />
            <input className="" type="text" placeholder="Senha" />
            <button className="btn logar" >
                Logar
                <img src="../assets/BackArrow.png" alt="" />
            </button>
        </div>
        
    </div>
<div className="background">
    <img src="../assets/ONDA - LOGIN.png" alt="" />
</div>
        </>
    );
}