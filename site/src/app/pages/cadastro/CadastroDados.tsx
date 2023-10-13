import { useNavigate } from 'react-router-dom';
import '../../../html-css-template/css/dados.css'
import { vetorImg } from '../../shared/components/imagens';
import { vetorIcon } from '../../shared/components/imagens';

export const CadastroDados = () => {
    const navegando = useNavigate();

    const navegarClick = () => {
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
                        <div className="input-right">
                            <input className="input-size" type="text" placeholder="Nome completo" />
                            <input className="input-size" type="text" placeholder="CPF" />
                            <input className="input-size" type="text" placeholder="CEP" />
                            <input className="input-size" type="text" placeholder="Número" />
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