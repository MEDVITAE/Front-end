import '../../../../html-css-template/css/novoFuncionario.css'
import { MenuPerfilFuncionario } from '../../../shared/components';

export const CadastroFuncionario = () => {
    return (
        <>
           <MenuPerfilFuncionario nome="Paternezi" />
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
                            <input placeholder="Senha" />
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