export const Perfil = () => {
    return (
        <>
        <div className="menu">
        <h1 className="rowdies bold-30">Nome usuário</h1>
       <div className="menuItens">
        <a href="" className="now roboto bold-30">Perfil</a>
        <a href="" className="item roboto bold-30">Ver mapa</a>
        <a href="" className="item roboto bold-30">Quiz de Aptidão</a>
        <a href="" className="item roboto bold-30">Histórico de Doações</a>
        <a href="" className="item roboto bold-30">Agendar Doação</a>
        <a href="" className="item roboto bold-30">Ranking</a>
       </div>
        <button className="btn bg-vermelhoClaro bold-30">Sair</button>
    </div>
    <main>
        <div className="statusBox">
            <h2 className="rowdies mr-bt">STATUS</h2>
            <div className="statusBoxItem">
                <div className="boxItem">
                    <h3 className="roboto sbold-24">Disponível</h3>
                    <div className="box"></div>
                </div>
                <div className="boxItem">
                    <h3 className="roboto sbold-24">Doações Feitas</h3>
                    <div className="box"></div>
                </div>
                <div className="boxItem">
                    <h3 className="roboto sbold-24">Tipo Sanguíneo</h3>
                    <div className="box"></div>
                </div>
            </div>
        </div>

        <div className="statusBox">
            <h2 className="rowdies mr-bt">DADOS DO USUÁRIO</h2>
            <div className="statusBoxRow">
                <div className="statusBoxItemColmun">
                    <div className="campoUsuario roboto bold-30">Nome Completo</div>
                    <div className="campoUsuario roboto bold-30">CPF</div>
                    <div className="campoUsuario roboto bold-30">CEP</div>
                    <div className="campoUsuario roboto bold-30">Número</div>
                </div>
                <div className="statusBoxItemColmun">
                    <div className="campoUsuario roboto bold-30">Sexo</div>
                    <div className="campoUsuario roboto bold-30">Data de Nascimento</div>
                    <div className="campoUsuario roboto bold-30">Peso</div>
                    <div className="campoUsuario roboto bold-30">Altura</div>
                </div>
                <div className="statusBoxItemColmun">
                    <div className="campoUsuario roboto bold-30">Email</div>
                    <div className="campoUsuario roboto bold-30">Senha</div>
                    <label className="picture" htmlFor="picture__input" tabIndex={0}>
                        <span className="picture__image"></span>
                    </label>
                        
                    <input type="file" name="picture__input" id="picture__input" />
                </div>
            </div>
            <div className="btnBoxItem">
                <button className="btn bg-vermelhoClaro bold-30">Editar</button>
            </div>
        </div>
    </main>
        </>
    );
}