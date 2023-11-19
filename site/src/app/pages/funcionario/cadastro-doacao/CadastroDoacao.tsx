
import '../../../../html-css-template/css/CadastroDoacao.css'
import { Input, MenuPerfilFuncionario, OndaLateralEsquerda } from '../../../shared/components'
import { vetorIcon } from '../../../shared/components/imagens';
import { vetorImg } from '../../../shared/components/imagens';
import "../../../../html-css-template/css/CadastroDoacao.css";
import { useState, useRef } from "react";
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
        title: message,
      });
    }

    const validacaoCerto = (message: string) => {
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
          title: message,
        });
      }

      const validacaoInfo = (message: string) => {
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
        icon: "info",
        title: message,
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
      validacaoErro("Preencha todos os campos")
    }

    else if (parseInt(cpf) < 0 || parseInt(litros) < 0 || parseInt(numero) < 0 || parseInt(telefone) < 0) {
      validacaoErro("Valores negativos inseridos");
    }
    // else if (cpf.length < 0 || litros.length < 0 || numero.length < 0 || telefone.length < 0) {
    //   validacaoErro("Valores negativos inseridos")
    // } 

    else if (cpf.length != 11) {
     validacaoErro("CPF inválido");
    }

    else if (
      !sexo.includes("Feminino") &&
      !sexo.includes("Masculino") &&
      !sexo.includes("feminino") &&
      !sexo.includes("masculino") &&
      !sexo.includes("FEMININO") &&
      !sexo.includes("MASCULINO")
    ) {
      validacaoErro("Sexo inválido");
    }

    else if (/\s/.test(cep) || /\s/.test(numero) || /\s/.test(telefone)) {
      validacaoErro("Valores numerícos não pode conter espaços"
      );
    }

    else if (cep.length < 8 || cep.length > 8) {
      validacaoErro("CEP inválido")
    }

    else if (telefone.length > 15 || telefone.length < 8) {
      validacaoErro("Número de telefone inválido")
    }

    else if (!tipoSanguineo.toUpperCase) {
      validacaoErro("Tipo sanguineo deve conter letras maiusculas")
    }

    else if (!/^(A|A\+|A-|B|B\+|B-|AB|AB\+|AB-|O|O\+|O-)$/.test(tipoSanguineo)) {
      validacaoErro("Tipo sanguíneo inválido");
    }
    // else if (
    //   !tipoSanguineo.includes("A") &&
    //   !tipoSanguineo.includes("A+") &&
    //   !tipoSanguineo.includes("A-") &&
    //   !tipoSanguineo.includes("B") &&
    //   !tipoSanguineo.includes("B+") &&
    //   !tipoSanguineo.includes("B-") &&
    //   !tipoSanguineo.includes("AB") &&
    //   !tipoSanguineo.includes("AB+") &&
    //   !tipoSanguineo.includes("AB-") &&
    //   !tipoSanguineo.includes("O") &&
    //   !tipoSanguineo.includes("O+") &&
    //   !tipoSanguineo.includes("O-")
    // ) {
    //   validacaoErro("Tipo sanguineo inválido")
    // } 
    else {
      validacaoCerto("Doação Registrada")
    }
  };

  const handleClickNav2 = () => {
    validacaoInfo("Doação não Registrada")
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
