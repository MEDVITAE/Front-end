import '../../../../html-css-template/css/telaAptidao.css'

import { MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";
import { vetorImg } from '../../../shared/components/imagens';

export const Quiz = () => {
    return (
        <>
            <OndaLateralEsquerda />
            <div className="flexContainer">
                <MenuPerfil nome="Diego" />
                <div className="conteudoQuiz">
                    <div className="containerAptidao">
                        <h1 className="rowdies bold-30">QUIZ DE APTIDÃO</h1>
                    </div>
                    <div className="primeiroQuiz">
                        <div className="quizUm">
                            <h3 className="now roboto sbold-20">Informações pessoais</h3>
                            <div className="divQuiz">
                                <input className="inputQuiz rowdies bold-30" id="placeholder-number" type="number" placeholder="Altura" />
                                <input className="inputQuiz rowdies bold-30" id="placeholder-number" type="number" placeholder="Peso" />

                                <select className="quizOpition">
                                    <option disabled selected>Fez alguma tatuagem nos ultimos 6 meses ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="não">Não</option>
                                </select>

                                <select className="quizOpition">
                                    <option disabled selected>Teve algum tipo de relação sexual recentimente ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="segundoQuiz">
                        <div className="quizDois">
                            <h3 className="now roboto sbold-20">Saúde</h3>
                            <div className="comboBox">

                                <select className="quizOpition">
                                    <option disabled selected>Sente algum desconforto ou dor de barriga ?</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                                <select className="quizOpition">
                                    <option disabled selected>Fez ou faz uso de algum medicamento ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Mão</option>
                                </select>
                                <select className="quizOpition">
                                    <option disabled selected>Tem algum tipo de DST ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <select className="quizOpition">
                                    <option disabled selected>Tomou alguma vacina contra covid recentimente ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="divImgAptidao">
                    <img className="imgTuboAptidao" src={vetorImg[11]} alt="" />
                </div>
            </div>
        </>
    );
}