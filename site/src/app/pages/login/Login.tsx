import '../../../html-css-template/css/login.css'
import '../../../html-css-template/css/geral.css'

import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navegando = useNavigate();

    const navegarClick = () => {
        navegando("/perfil-usuario");
    }

    const navegarClick2 = () => {
        navegando("/cadastro-usuario");
    }

    return (
        <>
            <div className="background">
                <img className='onda5' src={vetorImg[5]} alt="" />
            </div>
            <header className='header5'>
                <div className="nextPage2 roboto">
                    <div>
                        <h3>Ainda não tem conta?</h3>
                        <h3>Então vamos cadastrar!</h3>
                    </div>
                    <button onClick={navegarClick2} className="btn cadastrar bold-20" >
                        Cadastro
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
                <div className="componente5">
                    <a className="roboto bold-20" href="/pagina-inicial">Home</a>
                    <img src={vetorImg[3]} alt="Vitae" />
                </div>
            </header>

            <div className="container5">
                <div className="imgDoadores">
                    <img className="imgCara" src={vetorImg[12]} alt="" />;
                </div>
                <div className="formulario5">
                    <h1 className='rowdies'>LOGIN</h1>
                    <p className="rowdies regular-24 ">Bem-Vindo de volta!!</p>
                    <p className="rowdies regular-24 ">Logue com suas informações pessoais</p>
                    <input className="" type="text" placeholder="Email" />
                    <input className="" type="text" placeholder="Senha" />
                    <button onClick={navegarClick} className="btn logar bold-20" >
                        Logar
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}