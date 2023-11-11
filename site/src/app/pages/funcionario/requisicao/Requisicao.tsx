import { vetorIcon } from "../../../shared/components/imagens";
import '../../../../html-css-template/css/telaRequisicao.css'

export const Requisicao = () => {
    return (
        <>
            <div className="menu">
                <h1 className="rowdies bold-30">Nome Usuário</h1>
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
                        <h1>REQUISITE DOAÇÕES</h1>
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
                <div className="containerTipos">
                    <div className="selectTipos roboto">
                        <h2>Selecione o tipo sanguíneo</h2>
                        <div className="tiposSanguineos">
                            <h3 className="h3Req">Tipo: O-</h3>
                            <h3 className="h3Req">Tipo: O+</h3>
                            <h3 className="h3Req">Tipo: AB-</h3>
                            <h3 className="h3Req">Tipo: AB+</h3>
                            <h3 className="h3Req">Tipo: B-</h3>
                            <h3 className="h3Req">Tipo: B+</h3>
                            <h3 className="h3Req">Tipo: A-</h3>
                            <h3 className="h3Req">Tipo: A+</h3>
                        </div>
                    </div>
                    <div className="selectDoadores roboto">
                        <h2>Doadores Dísponiveis</h2>
                        <div className="doadoresDisponiveis">
                            <h3 className="doador1">
                                <p>Nome: Pedro Afonso</p>
                                <p>Tipo Snaguíneo: A+</p>
                            </h3>
                            <h3 className="alerta1">Alerta Individual</h3>
                            <h3 className="doador2">
                                <p>Nome: Vinicios Garcia</p>
                                <p>Tipo Snaguíneo: A+</p>
                            </h3>
                            <h3 className="alerta2">Alerta Individual</h3>
                            <h3 className="doador3">
                                <p>Nome: Diego Costa</p>
                                <p>Tipo Snaguíneo: A+</p>
                            </h3>
                            <h3 className="alerta3">Alerta Individual</h3>
                            <h3 className="doador4">
                                <p>Nome: João Tenório</p>
                                <p>Tipo Snaguíneo: A+</p>
                            </h3>
                            <h3 className="alerta4">Alerta Individual</h3>
                            <h3 className="doador5">
                                <p>Nome: Willian Paternezi</p>
                                <p>Tipo Snaguíneo: A+</p>
                            </h3>
                            <h3 className="alerta5">Alerta Individual</h3>
                        </div>
                    </div>
                </div>
                <div className="embrulhoBtn">
                    <button className="btnCadastrar btn">
                        Alertar todos
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}