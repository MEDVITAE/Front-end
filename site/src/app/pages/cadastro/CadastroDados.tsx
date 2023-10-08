import '../../../html-css-template/css/dados.css'

export const CadastroDados = () => {
    return (
        <>
            <div className="img">
                <img src="../assets/ONDA - CADASTRO.svg" alt="" />
            </div>
            <header>
                <div className="componente">
                    <img src="../assets/LogoVitai.png" alt="Vitae" />
                </div>
            </header>

            <div className="container">
                <div className="formulario">
                    <div className="dados">
                        <h1>Dados do usuarío</h1>
                        <h1 className="text-title">Cadastre os demais dados pessoais</h1>
                    </div>
                    <div className="inputs">
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
                    <button className="btn cadastrar bold-20">
                        Finalizar
                        <img src="../assets/BackArrow.png" alt="" />
                    </button>
                </div>


                <img className="imgDoe" src="../assets/World Blood Donor Day PNG 7.png" alt="" />


            </div>
        </>
    );
}