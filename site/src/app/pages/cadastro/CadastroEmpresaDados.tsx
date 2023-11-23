import "../../../html-css-template/css/Cadastro.css";
import "../../../html-css-template/css/geral.css";

import { useNavigate } from "react-router-dom";
import { vetorImg } from "../../shared/components/imagens";
import { vetorIcon } from "../../shared/components/imagens";

import { useCallback, useRef, useState } from "react";
import { Input } from "../../shared/components";
import Swal from "sweetalert2";
import { CadastroEmpresaService, ICadastroEmpresa } from "../../shared/sevice/api/tarefas/cadastros/CadastroEmpresaService";

export const CadastroEmpresaDados = () => {

  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  const navegando = useNavigate();
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      },
    });

    Toast.fire({
      icon: "error",
      title: message,
    });
  };

  const validateForm = () => {
    
    if (email === "" || senha === "" || confSenha === "" || nome === "" || cnpj === "") {
      showValidationErrorModal("Os Campos não pode estar em branco");
      return false;
    } 

    else if (!regexEmail.test(email)) {
            showValidationErrorModal(
                "O e-mail deve conter pelo menos um caractere antes e depois do @ e um ponto depois do @");
            return false;
        }
    
    else if (
      !email.includes("outlook.com") &&
      !email.includes("hotmail.com") &&
      !email.includes("gmail.com") &&
      !email.includes("yahoo.com") &&
      !email.includes("icloud.com")
    ) {
      showValidationErrorModal("Insira um dominio valido");
      return false;
    }

    else if (senha.length < 8) {
      showValidationErrorModal("Digite uma senha forte");
      return false;
    } 

    else if (cnpj.length !== 14) {
      showValidationErrorModal("CNPJ inválido");
    } 

    else if (/[^a-zA-Z0-9\s]/.test(nome)) {
      showValidationErrorModal("Nome não pode conter caracteres especiais");
    }
    
    else if (confSenha === senha) {
      navegando("/cadastro-empresa");
      return true;
    }

    else {
        showValidationErrorModal(
            "Senhas diferentes");
            return false;
    }

  };

  const handleCadastroEmpresa = useCallback(async () => {
    try {
      if (validateForm()) {
        const cadatroHospitalData: ICadastroEmpresa = {
          cnpj: cnpj,
          email: email,
          nome: nome,
          senha: senha,
      };

      const resultado = CadastroEmpresaService.create(cadatroHospitalData);

    }
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
    }
  }, [nome, email, senha, cnpj, validateForm]);


  const handleClickNav = () => {
    navegando("/login");
  };

  return (
    <>
      <div className="img">
        <img className="onda1" src={vetorImg[4]} alt="" />
        <img className="imgDoe" src={vetorImg[1]} alt="" />
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

          <button onClick={handleClickNav} className="btn logar bold-20">
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
            <h1 className="text-title">
              Cadastre as informações do Hemocentro
            </h1>
          </div>
          <div className="inputs">
          <Input
              className={"input-size"}
              placeholder={"Nome"}
              value={nome}
              onChange={(newValue) => setNome(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"CNPJ"}
              type="number"
              value={cnpj}
              onChange={(newValue) => setCnpj(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Email"}
              value={email}
              onChange={(newValue) => setEmail(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Senha"}
              type="password"
              value={senha}
              ref={inputPasswordRef}
              onChange={(newValue) => setSenha(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Confirmar senha"}
              type="password"
              value={confSenha}
              ref={inputPasswordRef}
              onChange={(newValue) => setConfSenha(newValue)}
            />
          </div>
          <div className="button">
            <button onClick={handleCadastroEmpresa} className="btn cadastrar bold-20">
              Avançar
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
