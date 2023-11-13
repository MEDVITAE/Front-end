import "../../../html-css-template/css/homocentro.css";
import { vetorImg } from "../../shared/components/imagens";
import { vetorIcon } from "../../shared/components/imagens";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../shared/components";
import Swal from "sweetalert2";

export const CadastroEmpresa = () => {
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");

  const navegando = useNavigate();
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleClickNav = () => {
    if (cep === "" ||
        numero === "" ||
        logradouro === "") {
          
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

    else if (cep.length < 8 || cep.length > 8) {
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
        title: "CEP invalído",
      });
    }

    else if (numero.length << 0) {
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
        title: "Valores negativos inseridos",
      });
    }

    else if (/[^a-zA-Z0-9\s]/.test(logradouro)) {
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
        title: "Logradouro não pode conter caracteres especiais",
      });
    } 

    else {
      navegando("/login");
    }
  };

  const handleClickNav2 = () => {
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
            <h1 className="text-title">
              Cadastre as informações do Hemocentro
            </h1>
          </div>
          <div className="inputs">
            <Input
              className={"input-size"}
              placeholder={"CEP"}
              type="number"
              value={cep}
              onChange={(newValue) => setCep(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Número"}
              type="number"
              value={numero}
              ref={inputPasswordRef}
              onChange={(newValue) => setNumero(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Logradouro"}
              value={logradouro}
              ref={inputPasswordRef}
              onChange={(newValue) => setLogradouro(newValue)}
            />
            <Input
              className={"input-size"}
              placeholder={"Complemento"}
              value={complemento}
              ref={inputPasswordRef}
              onChange={(newValue) => setComplemento(newValue)}
            />
          </div>
          <div className="button">
            <button onClick={handleClickNav} className="btn cadastrar bold-20">
              Cadastrar
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
