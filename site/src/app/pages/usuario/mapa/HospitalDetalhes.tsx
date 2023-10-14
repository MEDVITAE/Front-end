import '../../../../html-css-template/css/telaDetalheHospital.css'

import { MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";


export const HospitalDetalhes = () => {
    return (
        <>
        <OndaLateralEsquerda />
            <div className="flexContainer">
                <MenuPerfil nome="Diego" />
                <div className="conteudoHospital">
                    <div className="containerHospital">
                        <h1 className="rowdies bold-30" >VER MAPA</h1>
                    </div>
                    <div className="primeiroQuadro">
                        <h2 className="titleQuadro roboto sbold-24">Disponível</h2>
                        <div className="textosQuadro">
                            <p className="roboto sbold-16">Hospital São Mateus</p>

                            <p className="roboto sbold-16">Descrição: Local destinado ao atendimento de Doadores de sangue</p>

                            <p className="roboto sbold-16">Endereço: Rua morro das pedras, 120 -  são Paulo</p>

                            <p className="roboto sbold-16">Atendimento: Seg a Sab - 7:00 ás 12:00</p>
                        </div>
                    </div>

                    <div className="primeiroQuadro">
                        <h2 className="titleQuadro roboto sbold-24">Prioridade de doações</h2>
                        <div className="textosQuadro">
                            <div className="flexColumn">
                                <p className="roboto sbold-16 mgAtm">Sangue:
                                    Tipo Sanguineo O+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Motivo do requerimento</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>

                            <div className="flexColumn">
                                <p className="roboto sbold-16">Sangue:
                                    Tipo Sanguineo A+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Motivo do requerimento</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>

                            <div className="flexColumn">
                                <p className="roboto sbold-16">Sangue:
                                    Tipo Sanguineo B+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Motivo do requerimento</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imgTuboEnsaio">
                    <img className="imgTubo" src="../assets/TuboEnsaio.png" alt="" />
                </div>
            </div>
        </>
    );
}