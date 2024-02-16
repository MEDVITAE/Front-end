import Swal from "sweetalert2";

import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import {
  CadastroDoacaoService,
  ICadastroDoacao,
  ICadastroDoacaoCreate,
} from "../../../shared/sevice/api/tarefas/cadastros/CadastroDoacaoService";

import {
  Input,
  MenuPerfilFuncionario,
  OndaLateralEsquerda,
} from "../../../shared/components";
import { vetorIcon } from "../../../shared/components/imagens";
import { vetorImg } from "../../../shared/components/imagens";



export const CadastroDoacao = () => {
  const [cpf, setCpf] = useState("");
  const [litros, setLitros] = useState("");
  const [data, setData] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [tipoSanguineo, setTipoSanguineo] = useState("");
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

  const showValidationSuccessModal = (message: string) => {
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
      icon: "success",
      title: message,
    });
  };

  const [getUsuario, setgetUsuario] = useState<ICadastroDoacao | null>(null);
  useEffect(() => {
    const cpfUser = sessionStorage.getItem('cpf');
    setCpf(cpfUser ? cpfUser : '');
  }, []);

  useEffect(() => {
    if (cpf.trim() !== "") {
      CadastroDoacaoService.getByCpf(cpf)
        .then((result) => {
          if (result instanceof Error) {
          } else {
            setgetUsuario(result);
          }
        })
        .catch((error) => {
          showValidationErrorModal("Erro ao consultar cpf")
        });
    }
  }, [cpf]);

  const validateForm = async () => {
    if (litros === "" || tipoSanguineo === "") {
      showValidationErrorModal("Os Campos não pode estar em branco");
      return false;
    } else if (parseFloat(litros) < 0) {
      showValidationErrorModal("Valores negativos inseridos");
      return false;
    } else if (!tipoSanguineo.toUpperCase) {
      showValidationErrorModal(
        "Tipo sanguíneo deve conter letras maiúsculas"
      );
      return false;
    } else if (
      !tipoSanguineo.includes("A+") &&
      !tipoSanguineo.includes("A-") &&
      !tipoSanguineo.includes("B+") &&
      !tipoSanguineo.includes("B-") &&
      !tipoSanguineo.includes("AB+") &&
      !tipoSanguineo.includes("AB-") &&
      !tipoSanguineo.includes("O+") &&
      !tipoSanguineo.includes("O-")
    ) {
      showValidationErrorModal("Tipo sanguíneo incorreto");
      return false;
    } else {
      return true;
    }
  };

  const handleCadastroEmpresaEndereco = useCallback(async () => {
    try {
      if (await validateForm()) {
        const DoacaoData: ICadastroDoacaoCreate = {
          quantidade: parseFloat(litros),
          tipo: tipoSanguineo,
          fkAgenda: sessionStorage.getItem('idAgenda')
        };
        const resultado = CadastroDoacaoService.create(DoacaoData);
        showValidationSuccessModal("Doação confirmada!");
        sessionStorage.setItem('idAgenda', '');
        setData("");
        setCep("");
        setEmail("");
        setSexo("");
        setNumero("");
        setLitros("");
        setTipoSanguineo("");
        navegando('/perfil-funcionario/agenda')
      }
    } catch (error) {
      showValidationErrorModal("Erro ao confirmar doação");
    }
  }, [litros, tipoSanguineo, validateForm]);

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
              placeholder="Litros Doados"
              value={litros}
              ref={inputPasswordRef}
              onChange={(newValue) => setLitros(newValue)}
            />
          </div>
          <div className="quadro bg-branco">
            <div className="perfil">
              <img className="imgPerfil" src={vetorImg[2]} alt="" />
              {getUsuario ? (
                <h3 className="item roboto sbold-20">{getUsuario.nome}</h3>
              ) : (
                <h3 className="item roboto sbold-20">Nome Doador</h3>
              )}
            </div>
            <div className="containerDoacao">
              <div className="colunas">
                <div className="formularioDoacao">
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Data de nascimento"
                    value={getUsuario?.nascimento}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setData(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="number"
                    placeholder="CEP"
                    value={getUsuario?.cep}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setCep(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Email"
                    value={getUsuario?.email}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setEmail(newValue)}
                  />
                </div>
                <div className="formularioDoacao">
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Sexo Biológico"
                    value={getUsuario?.sexo}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setSexo(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="tel"
                    placeholder="Numero Residencial"
                    value={getUsuario?.numeroCasa}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setNumero(newValue)}
                  />
                  <Input
                    className="campoUsuario roboto"
                    type="text"
                    placeholder="Tipo Sanguíneo"
                    value={getUsuario?.tipo}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setTipoSanguineo(newValue)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btnFinal">
            <button
              onClick={handleClickNav2}
              className="btn NaoConfirmarDoacao"
            >
              Não Confirmar Doacao
              <img src={vetorIcon[0]} alt="" />
            </button>
            <button
              onClick={handleCadastroEmpresaEndereco}
              className="btn ConfirmarDoacao"
            >
              Confirmar Doação
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
