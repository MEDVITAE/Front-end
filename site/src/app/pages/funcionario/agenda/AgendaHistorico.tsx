import { vetorIcon } from "../../../shared/components/imagens";
import '../../../../html-css-template/css/telaAgendamentoFunc.css'

export const AgendaHistorico = () => {
    return (
        <>
            <div className="menu">
                <h1 className="rowdies bold-30">Nome Usuário</h1>
                <div className="menuItens">
                    <a href="" className="item roboto sbold-20">Cadastro Funcionario</a>
                    <a href="" className="item roboto sbold-20">Requisitar Doação</a>
                    <a href="" className="item roboto sbold-20">Cadastrar Doação</a>
                    <a href="" className="now roboto sbold-20">Histórico de Doações</a>
                </div>
                <button className="btn bg-vermelhoClaro">Sair</button>
            </div>
            <div className="conteudo">
                <div className="rowdies topo">
                    <div className="titulo">
                        <h1>HISTÓRICO DE DOAÇÕES</h1>
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
                    <div className="selectDoadores roboto">
                        <h2>Histórico</h2>
                        <div className="doadoresDisponiveis">
                            <h3 className="doador1">
                                <p>Nome: Pedro Afonso</p>
                            </h3>
                            <h3 className="alerta2">Horário: 12:30</h3>
                            <h3 className="alerta1">Data: 22/03/2023</h3>
                            <h3 className="doador2">
                                <p>Nome: Vinicios Garcia</p>
                            </h3>
                            <h3 className="alerta2">Horário: 10:15</h3>
                            <h3 className="alerta2">Data: 24/03/2023</h3>
                            <h3 className="doador3">
                                <p>Nome: Diego Costa</p>
                            </h3>
                            <h3 className="alerta2">Horário: 14:00</h3>
                            <h3 className="alerta3">Data: 03/04/2023</h3>
                            <h3 className="doador4">
                                <p>Nome: João Tenório</p>
                            </h3>
                            <h3 className="alerta2">Horário: 13:45</h3>
                            <h3 className="alerta4">Data: 11/04/2023</h3>
                            <h3 className="doador5">
                                <p>Nome: Willian Paternezi</p>
                            </h3>
                            <h3 className="alerta2">Horário: 10:00</h3>
                            <h3 className="alerta5">Data: 11/04/2023</h3>
                        </div>
                    </div>
                </div>
                <div className="embrulhoBtn">
                    <button className="btnCadastrar btn">
                        Baixar arquivo Excel
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}