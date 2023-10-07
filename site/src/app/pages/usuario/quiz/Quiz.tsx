export const Quiz = () => {
    return(
        <>
        <div className="flexContainer">
            <div className="imgOnda">
                <img className="imgOndaDentro" src="../assets/ONDA - PROXIMA DOAÇÃO.svg" alt="" />
            </div>
            <div className="imgLogo">
                <img className="imgOndaDentro" src="../assets/LogoVitai.png" alt=""  />
            </div>
            <div className="menu">
                <h1 className="rowdies bold-30">Nome usuário</h1>
                <div className="menuItens">
                    <a href="" className="now roboto sbold-20">Perfil</a>
                    <a href="" className="item roboto sbold-20">Ver mapa</a>
                    <a href="" className="item roboto sbold-20">Quiz de Aptidão</a>
                    <a href="" className="item roboto sbold-20">Histórico de Doações</a>
                    <a href="" className="item roboto sbold-20">Agendar Doação</a>
                    <a href="" className="item roboto sbold-20">Ranking</a>
                </div>
                <button className="btn bg-vermelhoClaro">Sair</button>
            </div>
            <div className="conteudoQuiz">
                <div className="containerAptidao">
                    <h1 className="rowdies bold-30">QUIZ DE APTIDÃO</h1>
                </div>
                <div className="primeiroQuadro">

                    <div className="quizUm">
                        <h3 className="now roboto sbold-20">Informações pessoais</h3>
                        <div className="inputsQuiz">
                            <input className="rowdies bold-30" id="placeholder-number" type="number" placeholder="Altura" />
                            <input className="rowdies bold-30" id="placeholder-number" type="number" placeholder="Peso" />

                            <select className="opitionUm">
                                <option disabled selected>Fez alguma tatuagem nos ultimos 6 meses ?</option>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </select>

                            <select className="opitionDois">
                                <option disabled selected>Teve algum tipo de relação sexual recentimente ?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className="segundoQuadro">
                    <div className="quizDois">
                        <h3 className="now roboto sbold-20">Saúde</h3>
                        <div className="comboBox">

                            <select className="opitionUm">
                                <option disabled selected>Sente algum desconforto ou dor de barriga ?</option>
                                <option value="">Sim</option>
                                <option value="Feminino">Não</option>
                            </select>
                            <select className="opitionDois">
                                <option disabled selected>Fez ou faz uso de algum medicamento ?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Mão</option>
                            </select>
                            <select className="opitionUm">
                                <option disabled selected>Tem algum tipo de DST ?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                            <select className="opitionDois">
                                <option disabled selected>Tomou alguma vacina contra covid recentimente ?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <div className="imgTuboEnsaio">
                <img className="imgTubo" src="../assets/TuboEnsaio.png" alt=""  />
            </div>
        </div>
        </>
    );
}