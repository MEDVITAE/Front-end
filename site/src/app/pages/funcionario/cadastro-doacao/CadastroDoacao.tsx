import '../../../../html-css-template/css/CadastroDoacao.css'

export const CadastroDoacao = () =>{
    return(
        <>
        <div className="tela">
      <div className="menu">
        <h1 className="rowdies bold-30">Olá,Nome usuário</h1>
        <div className="menuItens">
          <div>
            <a href="" className="now roboto sbold-20">Cadastro Funcionário</a>
            <a href="" className="item roboto sbold-20">Requisitar Doação</a>
            <a href="" className="item roboto sbold-20">Cadastrar Doação</a>
          </div>
        </div>
        <button className="btn bg-vermelhoClaro">Sair</button>
      </div>

      <div className="cadastrarDoacao">
        <div className="topoTela">
          <h1 className="rowdies bold-30">CADASTRAR DOAÇÂO</h1>
          <img src="../assets/LogoVitai.png" alt="" />
        </div>
        <div className="campos">
          <input className="camposInput rowdies" type="number" placeholder="CPF" />
          <input
            className="camposInput rowdies"
            type="number"
            placeholder="Litros Doados"
          />
        </div>
        <div className="quadro">
          <div className="perfil">
            <img src="../assets/image 4.png" alt="" width="150%"/>
            <h3 className="item roboto sbold-20">Nome usuário</h3>
          </div>
          <div className="container">
            <h1 className="rowdies bold-30">Informações Pessoais</h1>
            <div className="colunas">
              <div className="formulario">
                <input className="" type="date" placeholder="data de nascimento" />
                <input className="" type="number" placeholder="CEP" />
                <input className="" type="tel" placeholder="Telefone" />
              </div>
              <div className="formulario">
                <input className="" type="text" placeholder="Sexo Biológico" />
                <input className="" type="tel" placeholder="Numero Residencial" />
                <input className="" type="text" placeholder="Tipo Sanguíneo" />
              </div>
            </div>
          </div>
        </div>
        <div className="btnFinal">
          <button className="btn NaoConfirmarDoacao">
            Não Confirmar Doacao
            <img src="../assets/BackArrow.png" alt="" />
          </button>
          <button className="btn ConfirmarDoacao">
            Confirmar Doação
            <img src="../assets/BackArrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
        </>
    );
}