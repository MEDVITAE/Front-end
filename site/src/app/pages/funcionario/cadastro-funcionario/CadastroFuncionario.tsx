import "../../../../html-css-template/css/novoFuncionario.css";

import { vetorImg } from "../../../shared/components/imagens";
import { vetorIcon } from "../../../shared/components/imagens";

import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../shared/components";
import { CadastroFuncionarioService } from "../../../shared/sevice/api/tarefas/cadastros/CadastroFuncionarioService";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CadastroFuncionario = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  sessionStorage.setItem("email", email.trim());
  sessionStorage.setItem("senha", senha.trim());
  sessionStorage.setItem("confSenha", confSenha);

  const navegando = useNavigate();
  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
    if (
      email === "" ||
      nome === "" ||
      cargo === "" ||
      senha === "" ||
      confSenha === ""
    ) {
      showValidationErrorModal("Os Campos não podem estar em branco");
      return false;
    } 
    
    else if (!email.includes("@")) {
      showValidationErrorModal("Email deve conter @");
      return false;
    } 
    
    else if (
      !email.includes("outlook.com") &&
      !email.includes("hotmail.com") &&
      !email.includes("gmail.com") &&
      !email.includes("yahoo.com") &&
      !email.includes("icloud.com")
    ) {
      showValidationErrorModal("Insira um domínio válido");
      return false;
    } 
    
    else if (parseInt(cpf) < 0) {
      showValidationErrorModal("Valores negativos inseridos");
      return false;
    } 
    
    else if (cpf.length !== 11) {
      showValidationErrorModal("CPF inválido");
      return false;
    } 
    
    else if (senha.length < 8) {
      showValidationErrorModal("Digite uma senha forte");
      return false;
    } 
    
    else if (!/\s/.test(nome) && nome.length < 15) {
      showValidationErrorModal("Digite o nome completo");
      return false;
    } 
    
    else if (nome.length > 80) {
      showValidationErrorModal("Nome incorreto");
      return false;
    } 
    
    else if (confSenha === senha) {
      return true;
    } 
    
    else {
      showValidationErrorModal("Senhas diferentes");
      return false;
    }

  };

  const handleCadastroFuncionario = useCallback( async () => {
    try {
      if (validateForm()) {
        await CadastroFuncionarioService.create({
          nome: nome,
          email: email,
          senha: senha,
          role: cargo,
          cpf: cpf,
        });
        
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
          icon: "success",
          title: "Funcionario cadastrado",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
    }
  }, [nome, email, senha, cargo, cpf, validateForm]);

  const handleClickNav = () => {
    navegando("/pagina-inicial");
  };

  return (
    <>
      <div className="geral">
        <div className="menu">
          <h1 className="rowdies bold-30">Olá,Pedro!</h1>
          <div className="menuItens">
            <a href="" className="now roboto sbold-20">
              Cadastro Funcionario
            </a>
            <a href="" className="item roboto sbold-20">
              Requisitar Doação
            </a>
            <a href="" className="item roboto sbold-20">
              Cadastrar Doação
            </a>
          </div>
          <button onClick={handleClickNav} className="btn bg-vermelhoClaro">
            Sair
          </button>
        </div>
        <div className="conteudo">
          <div className="rowdies topo">
            <div className="titulo">
              <h1>NOVO FUNCIONARIO</h1>
            </div>

            <div className="logo">
              <img src={vetorImg[3]} alt="" />
            </div>
          </div>
          <div className="ondas">
            <div className="waves">
              <img src={vetorImg[6]} alt="" />
            </div>
          </div>
          <div className="containerCadastro">
            <div className="cadastroFuncionario roboto">
              <div className="cadastroInputs">
                <Input
                  className={"input-size"}
                  type="text"
                  placeholder={"Nome Completo"}
                  value={nome}
                  ref={inputPasswordRef}
                  onChange={(newValue) => setNome(newValue)}
                />
                <Input
                  className={"input-size"}
                  type="number"
                  placeholder={"CPF"}
                  value={cpf}
                  ref={inputPasswordRef}
                  onChange={(newValue) => setCpf(newValue)}
                />
                <Input
                  className={"input-size"}
                  type="text"
                  placeholder={"Cargo"}
                  value={cargo}
                  ref={inputPasswordRef}
                  onChange={(newValue) => setCargo(newValue)}
                />
                <Input
                  className={"input-size"}
                  type="text"
                  placeholder={"Email"}
                  value={email}
                  ref={inputPasswordRef}
                  onChange={(newValue) => setEmail(newValue)}
                />
                <div className="confirmaSenha">
                  <Input
                    className={"input-size"}
                    placeholder={"Senha"}
                    value={senha}
                    onChange={(newValue) => setSenha(newValue)}
                  />
                  <Input
                    className={"input-size"}
                    type="text"
                    placeholder={"Confirma senha"}
                    value={confSenha}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setConfSenha(newValue)}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleCadastroFuncionario} className="btnCadastrar btn">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
