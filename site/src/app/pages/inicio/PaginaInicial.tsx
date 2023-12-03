import { useNavigate } from 'react-router-dom';
import '../../../html-css-template/css/index.css';
import { vetorIcon, vetorImg, vetorImgAcromatica, vetorImgDeuteranopia, vetorImgProtanopia, vetorImgTritanopia } from '../../shared/components/imagens';
import { useCallback, useEffect, useState } from 'react';

export const PaginaInicial = () => {
    const navegando = useNavigate();

    const navegarClick = () => {
        navegando("/cadastro-usuario");
    }
    const navegarClickDoar = () => {
        navegando("/pagina-inicial/saiba-mais");
    }

    const [corBotao, setCorBotao] = useState('');
    const [corFundo, setCorFundo] = useState('');
    const [valorSelecionado, setValorSelecionado] = useState('');
    const [novaImgRetangulo, setNovaImgRetangulo] = useState('');
    const [novaIconCalendario, setNovaIconCalendario] = useState('');
    const [novaIconPrancheta, setNovaIconPrancheta] = useState('');
    const [novaIconEnvelope, setNovaIconEnvelope] = useState('');
    const [novaIconCoracao, setNovaIconCoracao] = useState('');

    const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const novoValor = event.target.value;
        setValorSelecionado(novoValor);
    }, []);

    useEffect(() => {

        const daltonismo = (valor: string) => {
            switch (valor) {
                case '1':
                    setCorBotao('bg-acromaticoBtn');
                    setCorFundo('bg-acromatico');
                    setNovaImgRetangulo(vetorImgAcromatica[0]);
                    setNovaIconPrancheta(vetorImgAcromatica[1]);
                    setNovaIconCalendario(vetorImgAcromatica[2]);
                    setNovaIconEnvelope(vetorImgAcromatica[3]);
                    setNovaIconCoracao(vetorImgAcromatica[4]);
                    break;
                case '2':
                    setCorBotao('bg-protanopiaBtn');
                    setCorFundo('bg-protanopia');
                    setNovaImgRetangulo(vetorImgProtanopia[0]);
                    setNovaIconPrancheta(vetorImgProtanopia[1]);
                    setNovaIconCalendario(vetorImgProtanopia[2]);
                    setNovaIconEnvelope(vetorImgProtanopia[3]);
                    setNovaIconCoracao(vetorImgProtanopia[4]);
                    break;
                    case '3':
                    setCorBotao('bg-deuteranopiaBtn');
                    setCorFundo('bg-deuteranopia');
                    setNovaImgRetangulo(vetorImgDeuteranopia[0]);
                    setNovaIconPrancheta(vetorImgDeuteranopia[1]);
                    setNovaIconCalendario(vetorImgDeuteranopia[2]);
                    setNovaIconEnvelope(vetorImgDeuteranopia[3]);
                    setNovaIconCoracao(vetorImgDeuteranopia[4]);
                    break;
                case '4':
                    setCorBotao('bg-tritanopiaBtn');
                    setCorFundo('bg-tritanopia');
                    setNovaImgRetangulo(vetorImgTritanopia[0]);
                    setNovaIconPrancheta(vetorImgTritanopia[1]);
                    setNovaIconCalendario(vetorImgTritanopia[2]);
                    setNovaIconEnvelope(vetorImgTritanopia[3]);
                    setNovaIconCoracao(vetorImgTritanopia[4]);
                    break;
                default:
                    setCorBotao('bg-vermelhoClaro');
                    setCorFundo('bg-azulEscuro');
                    setNovaImgRetangulo(vetorImg[9]);
                    setNovaIconCalendario(vetorIcon[3]);
                    setNovaIconPrancheta(vetorIcon[2]);
                    setNovaIconEnvelope(vetorIcon[4]);
                    setNovaIconCoracao(vetorIcon[5]);
                    break;
            }
        };
        daltonismo(valorSelecionado);

    }, [valorSelecionado]);

    return (
        <>
            <div className="imgMenu">
                <img className="imgOndaHeader" src={novaImgRetangulo} alt="" />
            </div>

            <header className='header2'>
                <img className="logo" src={vetorImg[3]} alt="Logo Vitae" />
                <div className="menuPagina ">
                    <a className="bold-20" href="">Como Doar</a>
                    <a className="bold-20" href="">Como Funciona</a>
                    <a className="bold-20" href="">Quem Somos</a>
                    <a className="bold-20" href="">Perguntas Frequentes</a>
                    <a className="bold-20" href="">Contato</a>
                    <li className="bold-20">|</li>
                    <a className="bold-20" href="/login">Login</a>
                    <a className="bold-20" href="/cadastro-usuario">Cadastre-se</a>
                </div>

                <div className="altCor">
                    <li className="roboto">Escollha o seu tipo de</li>
                    <li className="roboto">Daltonismo</li>
                    <select className={`btn3 ${corBotao} regular-16`} onChange={handleChange} value={valorSelecionado}>
                        <option value="">Padrão</option>
                        <option value="1">Acromática</option>
                        <option value="2">Protanopia</option>
                        <option value="3">Deuteranopia</option>
                        <option value="4">Tritanopia</option>
                    </select>
                </div>
            </header>

            <div className="slogan">
                <img className="imgPessoas" src={vetorImg[8]} alt="" />
                <div className="textoSlogan">
                    <div>
                        <h1 className="rowdies regular-64">Doe sangue</h1>
                        <h1 className="rowdies regular-64">Doe vida.</h1>
                        <p className="roboto regular-24">Transfusões de sangue fazem a</p>
                        <p className="roboto regular-24">diferença entre a vida e a morte</p>
                        <p className="roboto regular-24">para centenas de pacientes</p>
                        <p className="roboto regular-24">todos os dias.</p>
                    </div>
                    <button onClick={navegarClick} className={`btn ${corBotao} regular-16`}>
                        Quero ser um doador
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>

            <div className="comoDoar">
                <h1 className="rowdies">COMO DOAR</h1>
                <div className="conteudoDoar">
                    <div>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Apresentar documento com foto(RG, CNH, etc);
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Pesar no mínimo 50kg;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Estar bem de saúde, sem nenhum sintoma;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Não ter feito ingestão de bebiba alcoólica nas últimas 12 horas;
                        </li>
                        <li className="regular-14 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Precisa ter mais de 18 anos.
                        </li>
                    </div>
                    <div className="imgTuboEnsaio">
                        <img src={vetorImg[11]} alt="" />
                    </div>
                </div>
                <button onClick={navegarClickDoar} className={`btn ${corBotao} roboto regular-16`}>
                    Saiba mais
                    <img src={vetorIcon[0]} alt="" />
                </button>
            </div>

            <div className="funciona">
                <h1 className="rowdies">COMO FUNCIONA</h1>
                <h2 className="roboto regular-24">Novo Doador</h2>
                <div className="info">
                    <div className="imgInfo">
                        <img src={novaIconCalendario} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={novaIconPrancheta} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={novaIconEnvelope} alt="" />
                    </div>
                    <div className="imgInfo">
                        <img src={novaIconCoracao} alt="" />
                    </div>
                </div>
                <div className="info">
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">1 - Cadastre-se</h2>
                        <p className="roboto regular-16">Você se cadastra com os seus</p>
                        <p className="roboto regular-16">dados e a cidade que prefere doar </p>
                        <p className="roboto regular-16">(todo Brasil).</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">2 - Agendamento</h2>
                        <p className="roboto regular-16">Agende sua doação escolhendo</p>
                        <p className="roboto regular-16">o local e a hora que mais facilite</p>
                        <p className="roboto regular-16">sua ida.</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">3- Receba um aviso</h2>
                        <p className="roboto regular-16">Nós enviaremos um e-mail ou</p>
                        <p className="roboto regular-16">SMS avisando quando faltar</p>
                        <p className="roboto regular-16">sangue na sua região.</p>
                    </div>
                    <div className="infoTexto">
                        <h2 className="roboto regular-24">4 - Doe Sangue</h2>
                        <p className="roboto regular-16">Um pequeno gesto</p>
                        <p className="roboto regular-16">que salva muitas</p>
                        <p className="roboto regular-16">vidas.</p>
                    </div>
                </div>
            </div>

            <div className={`somos ${corFundo}`}>
                <h1 className="rowdies">QUEM SOMOS</h1>
                <div>
                    <div className="calendario">
                        <img src={vetorImg[0]} alt="" />
                        <h2 className="rowdies">AGENDAMENTO</h2>
                    </div>
                    <div className="proposta ">
                        <div className="propostaTexto bg-branco">
                            <div className="proText">
                                <h2 className="rowdies">PROPOSTA</h2>
                                <p className="roboto regular-20">Doar sangue é um ato de solidariedade e amor ao próximo. </p>
                                <p className="roboto regular-20">Muitas vidas dependem desse gesto, que pode salvar até</p>
                                <p className="roboto regular-20">quatro pessoas com uma única doação. No entanto, muitas</p>
                                <p className="roboto regular-20">pessoas deixam de doar por falta de informação, medo ou</p>
                                <p className="roboto regular-20">dificuldade de acesso aos hemocentros.</p>
                                <p className="roboto regular-20">Pensando nisso, criamos o site VITAE, uma plataforma </p>
                                <p className="roboto regular-20">online que tem como objetivo facilitar o agendamento de</p>
                                <p className="roboto regular-20">doação de sangue, conectando doadores e receptores de</p>
                                <p className="roboto regular-20">forma rápida e segura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="perguntas">
                <h1 className="rowdies">PERQUNTAS FRENQUENTES</h1>
                <div className="infoPerguntas">
                    <div className={`question ${corFundo}`}>
                        <p className="roboto regular-24">+ Qual a quantidade de sangue possuímos no nosso organismo?</p>
                    </div>
                    <div className="answer bg-branco">
                        <p className="roboto regular-20">O adulto possui aproximadamente 5 litros de sangue.</p>
                    </div>
                </div>

                <div className="infoPerguntas">
                    <div className={`question ${corFundo}`}>
                        <p className="roboto regular-24">+ Por que se realiza a triagem clinica?</p>
                    </div>
                    <div className="answer bg-branco">
                        <p className="roboto regular-20">É realizada com o objetivo de identificar fatores que impeçam a doação</p>
                        <p className="roboto regular-20"> por condição de saúde do doador ou coloquem riscos ao receptor. É</p>
                        <p className="roboto regular-20">muito importante responder com sinceridade todas as perguntas.</p>
                    </div>
                </div>

                <div className="infoPerguntas">
                    <div className={`question ${corFundo}`}>
                        <p className="roboto regular-24">+ Quais são os tipos sanguíneos?</p>
                    </div>
                    <div className="answer bg-branco">
                        <p className="roboto regular-20">A ocorrência de cada tipo sanguíneo na população é de aproximadamente:</p>
                        <p className="roboto regular-20">O = 45% ( O+ = 36% e O - = 9%)</p>
                        <p className="roboto regular-20">A = 42% ( A+ = 34% e A - = 8%)</p>
                        <p className="roboto regular-20">B = 10% ( B + = 8% e B - = 2%)</p>
                        <p className="roboto regular-20">AB = 3% ( AB+ = 2,5% e AB - = 0,5%)</p>
                    </div>
                </div>

                <div className="infoPerguntas">
                    <div className={`question ${corFundo}`}>
                        <p className="roboto regular-24">+ Principais dificuldades dos Bancos de sangue.</p>
                    </div>
                    <div className="answer bg-branco">
                        <p className="roboto regular-20"> · Falta de padronização ou indefinição dos processos.</p>
                        <p className="roboto regular-20"> · Baixo nível de segurança no controle das amostras.</p>
                        <p className="roboto regular-20"> · Dificuldade no controle da qualidade dos serviços internos e externos.</p>
                        <p className="roboto regular-20"> · Faturamento sem automatização.</p>
                    </div>
                </div>

                <div className="infoPerguntas">
                    <div className={`question ${corFundo}`}>
                        <p className="roboto regular-24">+ O pré agendamento realmente agiliza o processo de doação ?</p>
                    </div>
                    <div className="answer bg-branco">
                        <p className="roboto regular-20">Sim!! O pré agendamento torna o porcesso mais rápido e dinâmico,</p>
                        <p className="roboto regular-20">trazendo uma maior segurança, organização para que tudo corra bem no</p>
                        <p className="roboto regular-20">dia e que muitas vidas sejam salvas.</p>
                    </div>
                </div>
            </div>

            <div className="facaParte">
                <h1 className="rowdies">Faça parte e salve vidas</h1>
                <button onClick={navegarClick} className={`btn ${corBotao} roboto regular-16`}>
                    Quero ser Doador
                    <img src={vetorIcon[0]} alt="" />
                </button>
                <img src={vetorImg[14]} alt="" />
                <h2 className="roboto">Saiba mais Sobre </h2>
                <p className="poppins">Envie seu E-mail para saber tudo sobre a doação</p>
                <div className="saibaMais">
                    <input className={`poppins ${corFundo} ipt`} type="text" placeholder="Email" />
                    <button className={`btn3 ${corBotao} poppins`}>Saiba mais</button>
                </div>
            </div>

            <div className={`footer ${corFundo}`}>
                <div className="dados">
                    <div className="coluna Dev">
                        <h2 className="roboto">Desenvolvedores</h2>
                        <p className="poppins">Diego C. Moreira</p>
                        <p className="poppins">João Vitor Tenório</p>
                        <p className="poppins">Maessio Damaceno</p>
                        <p className="poppins">Pedro Afonso D. Marcato</p>
                        <p className="poppins">Willian Paternezi</p>
                        <p className="poppins">Vinicios G. Fagundes</p>
                    </div>
                    <div className="coluna Email">
                        <h2 className="roboto">E-mail</h2>
                        <p className="poppins">diego.moreira@sptech.school</p>
                        <p className="poppins">joao.tenorio@sptech.school</p>
                        <p className="poppins">maessio.souza@sptech.school</p>
                        <p className="poppins">pedro.marcato@sptech.school</p>
                        <p className="poppins">willian.paternezi@sptech.school</p>
                        <p className="poppins">vinicios.fagundes@sptech.school</p>
                    </div>
                    <div className="coluna Cont">
                        <h2 className="roboto">Contatos</h2>
                        <div className="icone">
                            <img src="../assets/twitter.png" alt="" />
                            <img src="../assets/google.png" alt="" />
                            <img src="../assets/linkedin.png" alt="" />
                            <img src="../assets/facebook.png" alt="" />
                        </div>
                        <p className="poppins"> <img src="../assets/Call.png" alt="" /> +55 11 9 0000-0000</p>
                        <p className="poppins"> <img src="../assets/Message.png" alt="" /> vitae@sptech.school</p>
                        <p className="poppins"> <img src="../assets/Location.png" alt="" /> Rua Haddock Lobo, 595</p>
                    </div>
                </div>
                <div className="rodape">
                    <p><img src="../assets/copyright.png" alt="" />Copyright 2023 Sptech Vitae</p>
                </div>
            </div>
        </>
    );
}