import  Retangulo  from '../../../../html-css-template/assets/Rectangle.svg';
import  Logo  from '../../../../html-css-template/assets/LogoVitai.png';

export const Header = () => {
    return (
        <>

            <div className="imgMenu">
                <img className="imgRetangulo" src={Retangulo} alt="" />
            </div>

            <header className='header2'>
                <img className="logo" src={Logo} alt="Logo Vitae" />
                <div className="menuPagina ">
                    <a className="bold-20" href="">Como Doar</a>
                    <a className="bold-20" href="">Como Funciona</a>
                    <a className="bold-20" href="">Quem Somos</a>
                    <a className="bold-20" href="">Perguntas Frequentes</a>
                    <a className="bold-20" href="">Contato</a>
                    <li className="bold-20">|</li>
                    <a className="bold-20" href="">Login</a>
                    <a className="bold-20" href="">Cadastre-se</a>
                </div>

                <div className="altCor">
                    <li className="roboto">Escollha o seu tipo de</li>
                    <li className="roboto">Daltonismo</li>
                    <button className="btn regular-16">
                        Opções Daltonismo
                        <img src="../assets/BackArrow.png" alt="" />
                    </button>
                </div>
            </header>
        </>
    );
}