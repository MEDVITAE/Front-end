import '../../../html-css-template/css/login.css'
import '../../../html-css-template/css/geral.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';
import { ILogin, ITokenId, TarefasService } from '../../shared/sevice/api/tarefas/TarefasService';
import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import { ApiException } from '../../shared/sevice/api/ApiException';

export const Login = () => {
    const navegando = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const loginData: ILogin = {
        email: email,
        senha: senha
    };

    const navegarClick2 = () => {
        navegando("/cadastro-usuario");
    }

    const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSenha(event.target.value);
    };

    const handleBlurEmail = () => {
        validateEmail();
    }

    const handleBlurSenha = () => {
        validateSenha();
    }

    const showValidationErrorModal = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "error",
            title: message
        });
    };

    function validateEmail(): boolean {
        // Verifica se o e-mail tem pelo menos um caractere antes e depois do "@" e um ponto depois do "@"
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            showValidationErrorModal(
                "O e-mail deve conter pelo menos um caractere antes e depois do @ e um 'ponto' depois do @");
            return false;
        }
        return true;
    }

    function validateSenha(): boolean {
        // Verifica se a senha tem pelo menos 8 caracteres
        if (senha.length < 8) {
            showValidationErrorModal(
                "A senha precisa ter no mínimo 8 caracteres");
            return false;
        }
        return true;
    }

    const validateEmailSenha = async () => {

        // Verificar se algum campo está vazio
        if (
            email === '' ||
            senha === ''
        ) {
            showValidationErrorModal("Por favor, preencha todos os campos.");
            return false;
        }

        const result: ITokenId | ApiException = await TarefasService.postLogin(loginData);
        
        if('message' in result){
            showValidationErrorModal("Email ou Senha inválido.");
        } else {
            // Salvar token e Id no sessionStorage
            sessionStorage.setItem("id", result.Id);
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("userRole", result.userRole);
            sessionStorage.setItem("userName", result.nome);
            if (result.fkHospital !== null) {
                sessionStorage.setItem("fkHospital", result.fkHospital);
            }
            
            return (
                validateEmail() &&
                validateSenha() &&
                true
            );
        }

        // Chamando todas as funções de validação
        
    };

    const navegarClick = async () => {
        if(email === 'vitae@gmail.com' && senha === 'Sorriso12'){
            await new Promise(resolve => setTimeout(resolve, 2000));
            navegando("/cadastro-empresa");
        }
        // Para o caso de todos os campos estarem validados
        if (await validateEmailSenha()) {
            // Todos os campos foram preenchidos e o usuário está apto
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2100,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "success",
                title: "Login feito com sucesso!"
            });
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sessionStorage.getItem("userRole") == "PACIENTE"){
                navegando("/perfil-usuario");
            } else {
                navegando("/perfil-funcionario/agenda")
            }
        }
    };

    return (
        <>
            <div className="bg-imgOndaLogo">
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
                    <img className="imgCara" src={vetorImg[12]} alt="" />
                </div>
                <div className="formulario5">
                    <h1 className='rowdies'>LOGIN</h1>
                    <p className="rowdies regular-24 ">Bem-Vindo de volta!!</p>
                    <p className="rowdies regular-24 ">Logue com suas informações pessoais</p>
                    <input className="" type="text" placeholder="Email" value={email} onBlur={handleBlurEmail} onChange={handleEmailChange} />
                    <input className="" type="password" placeholder="Senha" value={senha} onBlur={handleBlurSenha} onChange={handleSenhaChange} />
                    <button onClick={navegarClick} className="btn logar bold-20" >
                        Logar
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}