
import '../../../../html-css-template/css/CadastroDoacao.css'
import { MenuPerfilFuncionario, OndaLateralEsquerda } from '../../../shared/components'
import { vetorIcon } from '../../../shared/components/imagens';
import { vetorImg } from '../../../shared/components/imagens';

import { title } from "process";
import "../../../../html-css-template/css/CadastroDoacao.css";

import { Input, MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";
import { vetorIcon } from "../../../shared/components/imagens";
import { vetorImg } from "../../../shared/components/imagens";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


export const CadastroDoacao = () => {
  const [cpf, setCpf] = useState("");
  const [litros, setLitros] = useState("");
  const [data, setData] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipoSanguineo, setTipoSanguineo] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);
  
  const validacaoErro = (message: string) => {
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
        title: "CPF incorreto",
      });
    }

  const handleClickNav = async () => {
    if (
      cpf === "" ||
      litros === "" ||
      data === "" ||
      cep === "" ||
      sexo === "" ||
      numero === "" ||
      telefone === "" ||
      tipoSanguineo === ""
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

    else if (cpf.length << 0 || litros.length << 0 || numero.length << 0 || telefone.length << 0) {
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

    else if (cpf.length != 11) {
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
        title: "CPF incorreto",
      });
    }

    else if (
      !sexo.includes("Feminino") &&
      !sexo.includes("Masculino") &&
      !sexo.includes("feminino") &&
      !sexo.includes("masculino") &&
      !sexo.includes("FEMININO") &&
      !sexo.includes("MASCULINO")
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
        title: "Sexo incorreto",
      });
    }

    else if (/\s/.test(cep) || /\s/.test(numero) || /\s/.test(telefone)) {
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
        title: "Valores numerícos não pode conter espaços",
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
        title: "CEP inválido",
      });
    }

    else if (telefone.length > 15 || telefone.length < 8) {
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
        title: "Número de telefone incorreto",
      });
    }

    else if (!tipoSanguineo.toUpperCase) {
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
        title: "Tipo sanguíneo deve conter letras maiusculas",
      });
    }

    else if (
      !tipoSanguineo.includes("A") &&
      !tipoSanguineo.includes("A+") &&
      !tipoSanguineo.includes("A-") &&
      !tipoSanguineo.includes("B") &&
      !tipoSanguineo.includes("B+") &&
      !tipoSanguineo.includes("B-") &&
      !tipoSanguineo.includes("AB") &&
      !tipoSanguineo.includes("AB+") &&
      !tipoSanguineo.includes("AB-") &&
      !tipoSanguineo.includes("O") &&
      !tipoSanguineo.includes("O+") &&
      !tipoSanguineo.includes("O-")
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
        title: "Tipo sanguíneo incorreto",
      });
    } 
    else {
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
        title: "Doação registrada",
      });
    }
  };

  const handleClickNav2 = () => {
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
      title: "Doação não registrada",
    });
  };

  return (
    <>
      <OndaLateralEsquerda />
      <div className="tela">
      <MenuPerfilFuncionario nome="Paternezi" />
        <div className="cadastrarDoacao">
          <div className="topoTela">
            <h1 className="rowdies bold-30">CADASTRAR DOAÇÂO</h1>
          </div>
          <div className="campos">
            <Input
              className="camposInput rowdies"
              type="number"
              placeholder="CPF"

              value={cpf}
              ref={inputPasswordRef}
              onChange={(newValue) => setCpf(newValue)}
            />
            <Input
              className="camposInput rowdies"
              type="number"
              placeholder="Litros Doados"

              value={litros}
              ref={inputPasswordRef}
              onChange={(newValue) => setLitros(newValue)}
            />
          </div>
          <div className="quadro bg-branco">
            <div className="perfil">
              <img className="imgPerfil" src={vetorImg[2]} alt="" />
              <h3 className="item roboto sbold-20">Nome Doador</h3>
            </div>
            <div className="containerDoacao">
              <div className="colunas">
                <div className="formularioDoacao">
                  <Input
                    className="campoUsuario roboto"
                    type="date"
                    placeholder="Data de nascimento"

                    value={data}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setData(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="number"
                    placeholder="CEP"

                    value={cep}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setCep(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="tel"
                    placeholder="Telefone"

                    value={telefone}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setTelefone(newValue)}
                  />
                </div>
                <div className="formularioDoacao">
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Sexo Biológico"

                    value={sexo}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setSexo(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="tel"
                    placeholder="Numero Residencial"

                    value={numero}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setNumero(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Tipo Sanguíneo"

                    value={tipoSanguineo}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setTipoSanguineo(newValue)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btnFinal">
            <button onClick={handleClickNav2} className="btn NaoConfirmarDoacao">
              Não Confirmar Doacao
              <img src={vetorIcon[0]} alt="" />
            </button>
            <button onClick={handleClickNav} className="btn ConfirmarDoacao">
              Confirmar Doação
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
