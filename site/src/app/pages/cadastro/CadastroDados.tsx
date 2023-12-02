import '../../../html-css-template/css/dados.css'
import { useCallback, useEffect, useState } from 'react';
import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';
import { useNavigate } from 'react-router-dom';
import { IPrimeiroCadastro, ISegundoCadastroCaracteristicas, ISegundoCadastroEndereco, ITokenId, TarefasService } from '../../shared/sevice/api/tarefas/TarefasService';
import { Input } from '../../shared/components';
import { ApiException } from '../../shared/sevice/api/ApiException';
import Swal from "sweetalert2";
import { cp } from 'fs';

interface ITeste {
bairro: string;
cep: string;
complemento: string;
ddd: string;
gia: string;
ibge: string;
localidade: string;
logradouro: string;
siafi: string;
uf: string;
}

export const CadastroDados = () => {
  const navegando = useNavigate();

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [checkCampanhas, setCheckCampanhas] = useState(false);
  const [cidade, setCidade] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');

  const email = sessionStorage.getItem('email');
  const senha = sessionStorage.getItem('senha');

  useEffect(() => {
    const formatCPF = (value: string): void => {
      const cleanedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
      const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);

      if (match) {
        const formattedCpf = match.slice(1).filter(Boolean).join('.');
        setCpf(formattedCpf);
      }
      else {
        setCpf(cleanedValue);
      }
    };

    formatCPF(cpf);
  }, [cpf]);

  useEffect(() => {
    const formatDate = (value: string): void => {
      const cleanedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
      const match = cleanedValue.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);

      if (match) {
        const formattedDate = match.slice(1).filter(Boolean).join('/');
        setDtNascimento(formattedDate);
      } else {
        setDtNascimento(cleanedValue);
      }
    };

    formatDate(dtNascimento);
  }, [dtNascimento]);

  const buscarDadosEndereco = async (cep: any) => {
    try {
      const dadosMapa = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
        mode: "cors"
      });
  
      if (dadosMapa.ok) {
        const dadosEndereco: ITeste = await dadosMapa.json();
        console.log("Resposta da API ViaCEP:", dadosEndereco);
  
        if (dadosEndereco.localidade) {
          setCidade(dadosEndereco.localidade);
        } else {
          console.warn("Cidade não encontrada na resposta da API.");
        }
  
        if (dadosEndereco.bairro) {
          setBairro(dadosEndereco.bairro);
        } else {
          console.warn("Bairro não encontrado na resposta da API.");
        }
  
        if (dadosEndereco.logradouro) {
          setLogradouro(dadosEndereco.logradouro);
        } else {
          console.warn("Logradouro não encontrado na resposta da API.");
        }
      } else {
        console.error("Erro ao obter dados do endereço:", dadosMapa.status);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do endereço:", error);
    }
  };

  const swalError = (messege: string) => {
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
      title: messege,
    });
  }

  const swalSucesso = (messege: string) => {
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
      title: messege,
    });
  }

  const validateFields = () => {  

    buscarDadosEndereco(cep);
    //alert(cep)
    //alert(rua)
    //alert(logradouro)
    //alert(bairro)
    //alert(cidade)

    if (nome === "" || cpf === "" || cep === "" || numero === null || dtNascimento === "" || sexo === "") {
      swalError("Erro, preencha todos os campos");
    }
    else if (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      alert(cpf)
      swalError("CPF inválido, inserir apenas números");
    }
    else if (!/^\d{8}$/.test(cep)) {
      swalError("CEP inválido, inserir apenas números");
    }
    else if (!/^\d+$/.test(numero)) {
      swalError("Número inválido");
    }
    else if (/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{4}$/.test(dtNascimento)) {
      swalError("Data de nascimento inválida, inserir apenas numeros");
    }
    else if (/^[Mm][Aa]?[Ss]?[Cc]?[Uu]?[Ll]?[Ii]?[Nn]?[Oo]$/.test(sexo) && /^[Ff][Ee]?[Mm]?[Ii]?[Nn]?[Ii]?[Nn]?[Oo]$/.test(sexo)) {
      swalError("Sexo inválido");
    }
    else {
      return true;
    }
  };


  const cadastrando = useCallback(async () => {
    if (validateFields()) {
      const cpf1 = cpf.substring(0, 3);
      const cpf2 = cpf.substring(4, 7);
      const cpf3 = cpf.substring(8, 11);
      const cpf4 = cpf.substring(12, 14);

      const cpfFormatado = cpf1 + cpf2 + cpf3 + cpf4;

      const dia = dtNascimento.substring(0, 2);
      const mes = dtNascimento.substring(3, 5);
      const ano = dtNascimento.substring(6, 10);

      const nascimento = ano + "-" + mes + "-" + dia;

      const usuario: IPrimeiroCadastro | ApiException = await TarefasService.createUsuario({
        nome: nome,
        email: email ? email : '',
        senha: senha ? senha : '',
        role: 'PACIENTE',
        cpf: cpfFormatado,
      });

      if (usuario instanceof ApiException) {
        swalError("Erro ao cadastrar alguns dados. Aguerde um momento e tente novamente.");
        await new Promise(result => setTimeout(result, 2000));
        sessionStorage.clear();
        return navegando("/cadastro-usuario");
      }

      const token: ITokenId | ApiException = await TarefasService.postLogin({
        email: email ? email : '',
        senha: senha ? senha : '',
      });

      if (token instanceof ApiException) {
        return alert(token.message);
      }

      buscarDadosEndereco(cep);

      const endereco: ISegundoCadastroEndereco | ApiException = await TarefasService.createUsuarioEndereco({
        cidade: cidade,
        bairro: bairro,
        cep: cep,
        logradouro: logradouro,
        rua: 'rua',
        numero: Number(numero),
        fkUsuario: usuario.idUsuario,
      }, token ? token.token : '');

      if (endereco instanceof ApiException) {
        return swalError("Erro ao cadastrar alguns dados. Aguerde um momento e tente novamente.");
      }

      const caracteristica: ISegundoCadastroCaracteristicas | ApiException = await TarefasService.createUsuarioCaracteristicas({
        peso: '',
        altura: '',
        tatto: false,
        sexo: sexo,
        nascimento: nascimento,
        apto: false,
        fkUsuario: usuario.idUsuario,
      }, token ? token.token : '');

      if (caracteristica instanceof ApiException) {
        return swalError("Erro ao cadastrar alguns dados. Aguerde um momento e tente novamente.");
      }

      await new Promise(result => setTimeout(result, 2000));
      swalSucesso("Cadatro efetuado. Realize login com o email e senha cadastrados")
      navegando("/login");
      sessionStorage.clear();
    }
  }, [nome, cpf, cep, numero, dtNascimento, sexo]);

  return (
    <>
      <div className="img3">
        <img className="onda3" src={vetorImg[10]} alt="" />
        <img className="imgDoe3" src={vetorImg[13]} alt="" />
      </div>
      <header className='header3'>
        <div className="componente2">
          <img src={vetorImg[3]} alt="Vitae" />
        </div>
      </header>

      <div className="container2">
        <div className="formulario2">
          <div className="dados">
            <h1>Dados do usuarío</h1>
            <h1 className="text-title">Cadastre os demais dados pessoais</h1>
          </div>
          <div className="inputsDados">
            <div className="input-left">
              <Input
                className={`input-size`}
                placeholder={"CPF"}
                value={cpf}
                maxLength={14}
                onChange={newValue => setCpf(newValue)}
              />
              <Input
                className={`input-size`}
                placeholder={"CEP"}
                value={cep}
                maxLength={9}
                onChange={newValue => setCep(newValue)}
              />
              <Input
                className={"input-size"}
                placeholder={"Número"}
                value={numero}
                onChange={newValue => setNumero(newValue)}
              />
            </div>
            <div className="input-right">
              <Input
                className={`input-size`}
                placeholder={"Nome completo"}
                value={nome}
                onChange={newValue => setNome(newValue)}
              />
              <Input
                className="input-size"
                type="text"
                placeholder="Data de nascimento"
                value={dtNascimento}
                maxLength={10}
                onChange={(newValue) => setDtNascimento(newValue)}
              />
              <Input
                className="input-size"
                type="text"
                placeholder="Sexo biológico"
                value={sexo}
                onChange={(newValue) => setSexo(newValue)}
              />
            </div>
          </div>
          <div className="check">
            <input
              className="minhaCaixaDeSelecao"
              type="checkbox"
              id="minhaCaixaDeSelecao"
              name="minhaCaixaDeSelecao"
              value="valorDaCaixaDeSelecao"
              checked={checkCampanhas}
              onChange={() => setCheckCampanhas(!checkCampanhas)}
            />
            <h3>Desejo ser informado de campanhas e doações de emergencia ?</h3>
          </div>
          <button onClick={cadastrando} className="btn cadastrar bold-20">
            Finalizar
            <img src={vetorIcon[0]} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}