import '../../../html-css-template/css/dados.css'
import { useCallback, useState } from 'react';
import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';
import { Await, useNavigate } from 'react-router-dom';
import { IPrimeiroCadastro, TarefasService } from '../../shared/sevice/api/tarefas/TarefasService';
import { Input } from '../../shared/components';
import { ApiException } from '../../shared/sevice/api/ApiException';
import Swal from "sweetalert2";

export const CadastroDados = () => {
    const navegando = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('') ;
    const [dtNascimento, setDtNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [checkCampanhas, setCheckCampanhas] = useState(false);

    const [nomeError, setNomeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [cepError, setCepError] = useState('');
    const [numeroError, setNumeroError] = useState('');
    const [dtNascimentoError, setDtNascimentoError] = useState('');
    const [sexoError, setSexoError] = useState('');

    const validateFields = () => {
        if (
            nome === "" ||
            cpf === "" ||
            cep === "" ||
            numero === "" ||
            dtNascimento === "" ||
            sexo === "" 
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
        else if (!nome.trim()) {
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
              title: "Nome é obrigatório",
            });
          }
    
        else if (!/^\d{11}$/.test(cpf)) {
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
              title: "CPF inválido, inserir apenas números",
            });
          }
    
        else if (!/^\d{8}$/.test(cep)) {
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
              title: "CEP inválido, inserir apenas números",
            });
          }
    
        else if (!/^\d+$/.test(numero)) {
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
              title: "Número inválido",
            });
          }

        //cadastrando com padrão data 00/00/0000 porque a varialvél está retornando String
        else if  (!/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{4}$/.test(dtNascimento)) {
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
              title: "Data de nascimento inválida, inserir apenas numeros",
            });
          }

        else if (/^[Mm][Aa]?[Ss]?[Cc]?[Uu]?[Ll]?[Ii]?[Nn]?[Oo]$/.test(sexo) && /^[Ff][Ee]?[Mm]?[Ii]?[Nn]?[Ii]?[Nn]?[Oo]$/.test(sexo)) {
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
              title: "Sexo inválido,",
            });
          }
        
        else {
        return true;
        }
    };

    const cadastrando = useCallback(async () => {
       if (validateFields()){

        const usuario: IPrimeiroCadastro | ApiException = await TarefasService.createUsuario({
            nome: nome,
            email: sessionStorage.getItem('email'),
            senha: sessionStorage.getItem('senha'),
            role: 'PACIENTE',
            cpf: cpf,
        });
        const dia = dtNascimento.substring(0, 2);
        const mes = dtNascimento.substring(2, 4);
        const ano = dtNascimento.substring(4, 8);

        const nascimento = ano + "-" + mes + "-" + dia;  

        if(usuario instanceof ApiException){
            return alert (usuario.message)
        }else {
            TarefasService.createUsuarioCaracteristicas({
                peso :'',
                altura : '',
                tatto: false,
                sexo: sexo,
                nascimento: nascimento,
                apto: false,
                fkUsuario: usuario.id,
            })

        sessionStorage.clear();
            }
        }
    }, [nome,cpf,cep,numero,dtNascimento,sexo]);

    const navegarClick = async () => {
        cadastrando();
        await new Promise(result => setTimeout(result, 2000));
        navegando("/login");
    }

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
                            {nomeError && <div className="error-message">{nomeError}</div>}
                            <Input
                                className={`input-size ${cpfError ? 'error' : ''}`}
                                placeholder={"CPF"}
                                value={cpf}
                                onChange={newValue => setCpf(newValue)}
                            />
                            {cpfError && <div className="error-message">{cpfError}</div>}
                            <Input
                                className={`input-size ${cepError ? 'error' : ''}`}
                                placeholder={"CEP"}
                                value={cep}
                                onChange={newValue => setCep(newValue)}
                            />
                            {cepError && <div className="error-message">{cepError}</div>}
                            <Input
                                className={"input-size"}
                                placeholder={"Número"}
                                value={numero}
                                onChange={newValue => setNumero(newValue)}
                            />
                        </div>
                        <div className="input-right">
                        <Input
                                className={`input-size ${nomeError ? 'error' : ''}`}
                                placeholder={"Nome completo"}
                                value={nome}
                                onChange={newValue => setNome(newValue)}
                            />
                            <Input
                                className="input-size"
                                type="text"
                                placeholder="Data de nascimento"
                                value={dtNascimento}
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
                    <button onClick={navegarClick} className="btn cadastrar bold-20">
                        Finalizar
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}