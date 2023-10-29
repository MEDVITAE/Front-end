import { useNavigate } from 'react-router-dom';
import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';

import '../../../html-css-template/css/Cadastro.css'
import '../../../html-css-template/css/geral.css'
import { useCallback, useRef, useState } from 'react';
import { Input } from './components/Input';
import { TarefasService } from '../../shared/sevice/api/tarefas/TarefasService';

export const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const navegando = useNavigate();
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const navegarClick2 = () => {
        navegando("/login");
    }
    const navegarClick = () => {
        TarefasService.getAll();
    }

    const cadastrando = useCallback(() => {
        console.log(email);
        console.log(senha);
        console.log(confSenha);

        if(confSenha === senha){
            TarefasService.create({nome: 'Diego', email: email, senha: senha, role: 'PACIENTE', cpf: 12345678});
        }
    }, [email, senha, confSenha]);

    return (

        <>
            <div className="img">
                <img className="onda1" src={vetorImg[4]} alt="" />
                <img className="imgDoe" src={vetorImg[12]} alt="" />
            </div>

            <header className='header1'>
                <div className="componente1">
                    <img src={vetorImg[3]} alt="Vitae" />
                    <a className='roboto bold-20' href="/pagina-inicial">Home</a>
                </div>

                <div className="nextPage">
                    <div>
                        <h3>Já tem conta ?</h3>
                        <h3>Então vamos logar!</h3>
                    </div>

                    <button onClick={navegarClick2} className="btn logar bold-20">
                        Logar
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </header>

            <div className="container1">
                <div className="formulario1">
                    <div className="cadastro" >
                        <h1>Cadastre-se</h1>
                        <h1 className="text-title">Bem vindo!!</h1>
                        <h1 className="text-title">Cadastre suas informações pessoais</h1>
                    </div>
                    <div className="inputs">
                        <Input
                            className={"input-size"}
                            placeholder={"Email"}

                            value={email}
                            onChange={newValue => setEmail(newValue)}
                            onPressEnter={() => inputPasswordRef.current?.focus()}
                        />
                        <Input
                            className={"input-size"}
                            placeholder={"Senha"}
                            type="password"

                            value={senha}
                            ref={inputPasswordRef}
                            onChange={newValue => setSenha(newValue)}
                            onPressEnter={() => inputPasswordRef.current?.focus()}
                        />
                        <Input
                            className={"input-size"}
                            placeholder={"Confirmar senha"}
                            type="password"
                            
                            value={confSenha}
                            ref={inputPasswordRef}
                            onChange={newValue => setConfSenha(newValue)}
                        />
                    </div>
                    <div className="button">
                        <button onClick={navegarClick} className="btn cadastrar bold-20" >
                            Cadastrar
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}