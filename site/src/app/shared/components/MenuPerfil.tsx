interface IMenuPerfil{
    nome: string,
}

export const MenuPerfil: React.FC<IMenuPerfil> = ({ nome }) => {

    return (
        <>
            <div className="menu">
                <h1 className="rowdies bold-30">Olá { nome }</h1>
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
        </>
    );
}