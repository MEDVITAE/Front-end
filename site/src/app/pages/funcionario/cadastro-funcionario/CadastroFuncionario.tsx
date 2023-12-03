import axios from "axios";
import "../../../../html-css-template/css/novoFuncionario.css";
import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CadastroFuncionarioService } from "../../../shared/sevice/api/tarefas/cadastros/CadastroFuncionarioService";
import {
  Input,
  MenuPerfilFuncionario,
  OndaLateralEsquerda,
} from "../../../shared/components";
import Swal from "sweetalert2";

export const CadastroFuncionario = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("");
  const [exibirTexto, setExibirTexto] = useState(true);

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

  const showValidationSuccessModal = (message: string) => {
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
    } else if (!email.includes("@")) {
      showValidationErrorModal("Email deve conter @");
      return false;
    } else if (
      !email.includes("outlook.com") &&
      !email.includes("hotmail.com") &&
      !email.includes("gmail.com") &&
      !email.includes("yahoo.com") &&
      !email.includes("icloud.com")
    ) {
      showValidationErrorModal("Insira um domínio válido");
      return false;
    } else if (parseInt(cpf) < 0) {
      showValidationErrorModal("Valores negativos inseridos");
      return false;
    } else if (cpf.length !== 11) {
      showValidationErrorModal("CPF inválido");
      return false;
    } else if (senha.length < 8) {
      showValidationErrorModal("Digite uma senha forte");
      return false;
    } else if (!/\s/.test(nome) && nome.length < 15) {
      showValidationErrorModal("Digite o nome completo");
      return false;
    } else if (nome.length > 80) {
      showValidationErrorModal("Nome incorreto");
      return false;
    } else if (confSenha === senha) {
      return true;
    } else {
      showValidationErrorModal("Senhas diferentes");
      return false;
    }
  };

  const handleCadastroFuncionario = useCallback(async () => {
    try {
      if (validateForm()) {
        await CadastroFuncionarioService.create({
          nome: nome,
          email: email,
          senha: senha,
          role: cargo,
          cpf: cpf,
        });

        showValidationSuccessModal("Funcionário cadastrado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
    }
  }, [nome, email, senha, cargo, cpf, validateForm]);

  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setArquivo(selectedFile);
      setNomeArquivo(selectedFile.name);
      setExibirTexto(false);
    }
  };

  const enviarArquivoParaAPI = () => {
    if (arquivo == null) {
      showValidationErrorModal("Selecione um arquivo txt");
      return;
    }

    const formData = new FormData();
    formData.append("file", arquivo);
    formData.append("nome", "arquivo.txt");

    axios
      .post("http://localhost:8082/usuario/ler", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(() => {
        showValidationSuccessModal("Arquivo exportado com sucesso!");
        setNomeArquivo("");
        setExibirTexto(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <OndaLateralEsquerda />
      <div className="geral">
        <MenuPerfilFuncionario nome="Paternezi" />
        <div className="conteudoFuncionario">
          <div className="rowdies tituloFuncionario">
            <h1>NOVO FUNCIONARIO</h1>
          </div>
          <div className="containerCadastro">
            <label
              htmlFor="arquivoInput"
              className="roboto sbold-16 labelFuncionario"
            >
              {exibirTexto
                ? "Adicione um 'Layout TXT' para cadastrar uma lista de funcionários"
                : `Arquivo selecionado: ${nomeArquivo}`}
            </label>
            <input
              id="arquivoInput"
              className="campoFuncionario roboto bold-30"
              type="file"
              accept=".txt"
              capture="environment"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            {nomeArquivo && exibirTexto && (
              <div className="nomeArquivo">Nome do Arquivo: {nomeArquivo}</div>
            )}
            <div className="cadastroFuncionario roboto">
              <div className="cadastroInputs">
                <div className="esquerda">
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    type="text"
                    placeholder={"Nome Completo"}
                    value={nome}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setNome(newValue)}
                  />
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    type="number"
                    placeholder={"CPF"}
                    value={cpf}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setCpf(newValue)}
                  />
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    type="text"
                    placeholder={"Cargo"}
                    value={cargo}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setCargo(newValue)}
                  />
                </div>
                <div className="esquerda">
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    type="text"
                    placeholder={"Email"}
                    value={email}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setEmail(newValue)}
                  />
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    placeholder={"Senha"}
                    value={senha}
                    onChange={(newValue) => setSenha(newValue)}
                  />
                  <Input
                    className={"campoFuncionario roboto bold-30"}
                    type="text"
                    placeholder={"Confirma senha"}
                    value={confSenha}
                    ref={inputPasswordRef}
                    onChange={(newValue) => setConfSenha(newValue)}
                  />
                </div>
              </div>
            </div>
            <div className="caixaRequisicaoBtn">
              <button className="btn" onClick={handleCadastroFuncionario}>
                Cadastrar Funcionário
              </button>
              <button
                className="btn2 bg-azulEscuro"
                onClick={enviarArquivoParaAPI}
              >
                Exportar Layout TXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};