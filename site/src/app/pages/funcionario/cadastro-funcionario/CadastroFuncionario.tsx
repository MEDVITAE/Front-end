import "../../../../html-css-template/css/novoFuncionario.css";

import { vetorImg } from "../../../shared/components/imagens";
import { vetorIcon } from "../../../shared/components/imagens";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../shared/components";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CadastroFuncionario = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  sessionStorage.setItem("email", email.trim());
  sessionStorage.setItem("senha", senha.trim());
  sessionStorage.setItem("confSenha", confSenha);

  const navegando = useNavigate();
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleClickNav = () => {
    if (email === "" || nome === "" || cargo === "" || senha === "" || confSenha === "") {

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

    else if (!email.includes("@")) {
      
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
        title: "Email precisa conter @",
      });

    }

    else if (
      !email.includes("outlook.com") &&
      !email.includes("hotmail.com") &&
      !email.includes("gmail.com") &&
      !email.includes("yahoo.com") &&
      !email.includes("icloud.com")
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
        title: "Insira um dominio valido",
      });

    }

    else if (senha === "") if (senha.length < 8) {
        
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
        title: "Digite uma senha forte",
      });
    }

    
    else if (!/\s/.test(nome) && nome.length < 15) {
      
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
        title: "Digite o nome completo",
      });
    }

    else if (nome.length > 80) {
      
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
        title: "Nome incorreto",
      });
    }

    else if (confSenha === "") {
      
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
        title: "Confirmar sua senha"
      });
    }

    else if (confSenha === senha) {
      navegando("/perfil-funcionario/cadastro-funcionario");
    }
  };

  const handleClickNav2 = () => {
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
          <button onClick={handleClickNav2} className="btn bg-vermelhoClaro">
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
                <Input
                  className={"input-size"}
                  placeholder={"Senha"}
                  value={senha}
                  onChange={(newValue) => setSenha(newValue)}
                />
                <div className="confirmaSenha">
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
            <button onClick={handleClickNav} className="btnCadastrar btn">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
