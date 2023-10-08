import '../../../../html-css-template/css/novoFuncionario.css'

export const CadastroFuncionario = () => {
    return(
        <>
        <div className="menu">
        <h1 className="rowdies bold-30">Olá,Pedro!</h1>
        <div className="menuItens">
            <a href="" className="now roboto sbold-20">Cadastro Funcionario</a>
            <a href="" className="item roboto sbold-20">Requisitar Doação</a>
            <a href="" className="item roboto sbold-20">Cadastrar Doação</a>
        </div>
        <button className="btn bg-vermelhoClaro">Sair</button>
    </div>
    <div className="conteudo">
        <div className="rowdies topo">
            <div className="titulo">
                <h1>NOVO FUNCIONARIO</h1>
            </div>

            <div className="logo">
                <img src="../assets/LogoVitai.png" alt="" />
            </div>
        </div>
        <div className="ondas">
            <div className="waves">
                <img src="../assets/ONDA - MAPA.svg" alt="" />
            </div>
        </div>
        <div className="containerCadastro">
            <div className="cadastroFuncionario roboto">
                <div className="cadastroInputs">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Nome Completo" />
                    <input   placeholder="Senha" />
                    <input type="text" placeholder="Cargo" />
                    <div className="confirmaSenha">
                    <input id="input" placeholder="Confirma senha" />
                    </div>
                </div>
            </div>
            <div className="btnCadastrar btn">
               Cadastrar 
               <span 
               //<i className="gg-arrow-right-o">  <svg><use xlink:href="/all.svg#gg-arrow-right-o"/></svg></i>
             ></span>
            </div>
        </div>
    </div>
        </>
    );
}