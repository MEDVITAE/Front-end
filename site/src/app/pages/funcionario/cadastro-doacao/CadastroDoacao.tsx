import '../../../../html-css-template/css/CadastroDoacao.css'
import { MenuPerfilFuncionario, OndaLateralEsquerda } from '../../../shared/components'
import { vetorIcon } from '../../../shared/components/imagens';
import { vetorImg } from '../../../shared/components/imagens';

export const CadastroDoacao = () => {
  return (
    <>
      <OndaLateralEsquerda />
      <div className="tela">
      <MenuPerfilFuncionario nome="Paternezi" />
        <div className="cadastrarDoacao">
          <div className="topoTela">
            <h1 className="rowdies bold-30">CADASTRAR DOAÇÂO</h1>
          </div>
          <div className="campos">
            <input className="camposInput rowdies" type="number" placeholder="CPF" />
            <input
              className="camposInput rowdies"
              type="number"
              placeholder="Litros Doados"
            />
          </div>
          <div className="quadro bg-branco">
            <div className="perfil">
              <img className='imgPerfil' src={vetorImg[2]} alt="" />
              <h3 className="item roboto sbold-20">Nome Doador</h3>
            </div>
            <div className="containerDoacao">
              <div className="colunas">
                <div className="formularioDoacao">
                  <input className="campoUsuario roboto" type="date" placeholder="data de nascimento" />
                  <input className="campoUsuario roboto" type="number" placeholder="CEP" />
                  <input className="campoUsuario roboto" type="tel" placeholder="Telefone" />
                </div>
                <div className="formularioDoacao">
                  <input className="campoUsuario roboto" type="text" placeholder="Sexo Biológico" />
                  <input className="campoUsuario roboto" type="tel" placeholder="Numero Residencial" />
                  <input className="campoUsuario roboto" type="text" placeholder="Tipo Sanguíneo" />
                </div>
              </div>
            </div>
          </div>
          <div className="btnFinal">
            <button className="btn NaoConfirmarDoacao">
              Não Confirmar Doacao
              <img src={vetorIcon[0]} alt="" />
            </button>
            <button className="btn ConfirmarDoacao">
              Confirmar Doação
              <img src={vetorIcon[0]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}