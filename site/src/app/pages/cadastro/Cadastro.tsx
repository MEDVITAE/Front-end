import { useNavigate } from "react-router-dom";
import { vetorImg } from "../../shared/components/imagens";
import { vetorIcon } from "../../shared/components/imagens";

import "../../../html-css-template/css/Cadastro.css";
import "../../../html-css-template/css/geral.css";
import { useRef, useState } from "react";
import { Input } from "../../shared/components";
import Swal from "sweetalert2";

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [confSenhaError, setConfSenhaError] = useState("");



  sessionStorage.setItem("email", email.trim());
  sessionStorage.setItem("senha", senha.trim());
  sessionStorage.setItem("confSenha", confSenha);

  const navegando = useNavigate();
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleClickNav = () => {
    setEmailError("");
    setSenhaError("");
    setConfSenhaError("");
    
    if (
      email === "" ||
      senha === "" ||
      confSenha === "" 
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Preencha todos os campos obrigatórios",
      });
    }
    // if(email === "") return alert("email n pode ser null");
    // if(senha === "") return alert("senha n pode ser null");
    else if (!/^\S{3,}@(\S+\.\S+)$/.test(email)
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Formato de e-mail inválido",
      });
    }
    else if (senha.length < 8) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "A senha deve ter pelo menos 8 caracteres",
      });
    }
    
    else if (confSenha !== senha || confSenha === '') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "As senhas não coincidem",
      });
    }

    else if (confSenha === senha) {
      navegando("/cadastro-usuario/complementar");
    }
  };

  const handleClickNav2 = () => {
    navegando("/login");
  };

  return (
    <>
      <div className="img">
        <img className="onda1" src={vetorImg[4]} alt="" />
        <img className="imgDoe" src={vetorImg[12]} alt="" />
      </div>

      <header className="header1">
        <div className="componente1">
          <img src={vetorImg[3]} alt="Vitae" />
          <a className="roboto bold-20" href="/pagina-inicial">
            Home
          </a>
        </div>

        <div className="nextPage">
          <div>
            <h3>Já tem conta ?</h3>
            <h3>Então vamos logar!</h3>
          </div>

          <button onClick={handleClickNav2} className="btn logar bold-20">
            Logar
            <img src={vetorIcon[0]} alt="" />
          </button>
        </div>
      </header>

      <div className="container1">
        <div className="formulario1">
          <div className="cadastro">
            <h1>Cadastre-se</h1>
            <h1 className="text-title">Bem vindo!!</h1>
            <h1 className="text-title">Cadastre suas informações pessoais</h1>
          </div>
          <div className="inputs">
            <Input
              className={"input-size${emailError ? 'error' : ''}"}
              placeholder={"Email"}
              value={email}
              onChange={(newValue) => setEmail(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
              {emailError && <div className="error-message">{emailError}</div>}
            <Input
              className={"input-size ${senhaError ? 'error' : ''}"}
              placeholder={"Senha"}
              type="password"
              value={senha}
              ref={inputPasswordRef}
              onChange={(newValue) => setSenha(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            {senhaError && <div className="error-message">{senhaError}</div>}

            <Input
              className={"input-size ${confSenhaError ? 'error' : ''}"}
              placeholder={"Confirmar senha"}
              type="password"
              value={confSenha}
              ref={inputPasswordRef}
              onChange={(newValue) => setConfSenha(newValue)}
            /> 
            {confSenhaError && <div className="error-message">{confSenhaError}</div>}
            
          </div>
          <div className="button">
            <button onClick={handleClickNav} className="btn cadastrar bold-20">
              Avançar
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
