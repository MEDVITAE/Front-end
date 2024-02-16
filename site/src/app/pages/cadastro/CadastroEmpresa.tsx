import Swal from "sweetalert2";

import { useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
  CadastroEmpresaEnderecoService, 
  ICadastroEmpresaEndereco 
} from "../../shared/sevice/api/tarefas/cadastros/CadastroEmpresaEnderecoService";

import { Input } from "../../shared/components";
import { vetorImg } from "../../shared/components/imagens";
import { vetorIcon } from "../../shared/components/imagens";

  export const CadastroEmpresa = () => {

    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
  
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const navegando = useNavigate();
    
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
      if (cidade === "" || bairro === "" || rua === "") {
        showValidationErrorModal("Os Campos não podem estar em branco");
        return false;
      } 
      else if (Number(cep) !== 8) {
        showValidationErrorModal("CEP inválido");
        return false;
      } 
      else if (Number(numero) <= 0) {
        showValidationErrorModal("Valores negativos inseridos");
        return false;
      } 

      else if (/[^a-zA-Z0-9\s]/.test(rua)) {
        showValidationErrorModal("Logradouro não pode conter caracteres especiais");
      }

      else if (/[^a-zA-Z0-9\s]/.test(bairro)) {
        showValidationErrorModal("bairro não pode conter caracteres especiais");
      }

      else if (/[^a-zA-Z0-9\s]/.test(cidade)) {
        showValidationErrorModal("Cidade não pode conter caracteres especiais");
      }

      else {
        navegando("/login");
        return true;
      }
      
    };

    const handleCadastroEmpresaEndereco = useCallback(async () => {
      try {
        if (validateForm()) {
          const enderecoData: ICadastroEmpresaEndereco = {
            cidade: cidade,
            bairro: bairro,
            cep: parseInt(cep),
            logradouro: "Rua",
            rua: rua,
            numero: parseInt(numero),
            fkUsuario: null,
            fkHospital: sessionStorage.getItem("idHospital")
        };
          const resultado = CadastroEmpresaEnderecoService.create(enderecoData);
        }
      } catch (error) {
        console.error("Erro ao cadastrar empresa:", error);
      }
    }, [cidade, bairro, cep, rua, numero, validateForm]);

  const handleClickNav2 = () => {
    navegando("/login");
  };

  return (
    <>
      <div className="img2">
        <img className="onda1" src={vetorImg[4]} alt="" />
        <img className="imgDoeEmpre" src={vetorImg[1]} alt="" />
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
              placeholder={"Cidade"}
              type="text"
              value={cidade}
              ref={inputPasswordRef}
              onChange={(newValue) => setCidade(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Bairro"}
              type="text"
              value={bairro}
              ref={inputPasswordRef}
              onChange={(newValue) => setBairro(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
            />
            <Input
              className={"input-size"}
              placeholder={"Rua"}
              type="text"
              value={rua}
              ref={inputPasswordRef}
              onChange={(newValue) => setRua(newValue)}
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
          </div>
          <div className="button">
            <button onClick={handleCadastroEmpresaEndereco} className="btn cadastrar bold-20">
              Cadastrar
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};