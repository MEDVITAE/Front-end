import '../../../html-css-template/css/index.css';
import { FacaParte, Perguntas, Somos } from './components';
import { Doar } from './components/Doar';
import { Funciona } from './components/Funciona';
import { Header } from './components/Header';
import { Slogan } from './components/Slogan';


export const PaginaInicial = () => {
    return (
        <>
            <Header />

            <Slogan />

            <Doar />

            <Funciona />

            <Somos />

            <Perguntas />

            <FacaParte />

            

            <div className="footer bg-azulReal">
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