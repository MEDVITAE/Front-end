import '../../../html-css-template/css/dados.css'

import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TarefasService } from '../../shared/sevice/api/tarefas/TarefasService';
import { Input } from '../../shared/components';

export const CadastroDados = () => {
    const navegando = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [sangue, setSangue] = useState('');
    const [tel, setTel] = useState('');

    sessionStorage.getItem('sein');
    sessionStorage.getItem('sei');
    sessionStorage.getItem('se');

    const cadastrando = useCallback(() => {
        console.log(sessionStorage.getItem('sein'));
        console.log(sessionStorage.getItem('sei'));
        console.log(sessionStorage.getItem('se'));

        TarefasService.create({
            nome: nome,
            email: sessionStorage.getItem('sein'),
            senha: sessionStorage.getItem('sei'),
            role: 'PACIENTE',
            cpf: cpf
        });

        sessionStorage.clear();
    }, []);

    const navegarClick = () => {
        //navegando("/login");
        cadastrando();
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
                        <div className="input-right">
                            <Input
                                className={"input-size"}
                                placeholder={"Nome completo"}

                                value={nome}
                                onChange={newValue => setNome(newValue)}
                            />
                            <Input
                                className={"input-size"}
                                placeholder={"CPF"}

                                value={cpf}
                                onChange={newValue => setCpf(newValue)}
                            />
                            <Input
                                className={"input-size"}
                                placeholder={"CEP"}

                                value={cep}
                                onChange={newValue => setCep(newValue)}
                            />
                            <Input
                                className={"input-size"}
                                placeholder={"Número"}

                                value={numero}
                                onChange={newValue => setNumero(newValue)}
                            />
                        </div>
                        <div className="input-left">
                            <input className="input-size" type="text" placeholder="Data de nascimento" />
                            <input className="input-size" type="text" placeholder="Sexo biologico" />
                            <input className="input-size" type="text" placeholder="Tipo sanguineo" />
                            <input className="input-size" type="text" placeholder="Telefone" />
                        </div>
                    </div>
                    <div className="check">
                        <input className="minhaCaixaDeSelecao" type="checkbox" id="minhaCaixaDeSelecao" name="minhaCaixaDeSelecao"
                            value="valorDaCaixaDeSelecao" />
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