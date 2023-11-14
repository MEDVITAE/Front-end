import '../../../../html-css-template/css/menu.css';

interface IMenuPerfil{
    nome: string;
}

export const MenuPerfilFuncionario: React.FC<IMenuPerfil> = ({ nome }) => {

    return (
        <>
            <div className="menu">
            <h1 className="rowdies bold-30">Olá {nome}</h1>
                <div className="menuItens">
                    <a href="/perfil-funcionario/cadastro-funcionario" className="item roboto sbold-20">Cadastro Funcionario</a>
                    <a href="/perfil-funcionario/registro-doacao" className="item roboto sbold-20">Requisitar Doação</a>
                    <a href="/perfil-funcionario/requisicao-sangue" className="item roboto sbold-20">Cadastrar Doação</a>
                    <a href="/perfil-funcionario/agenda" className="item roboto sbold-20">Agenda de Doações</a>
                </div>
                <button className="btn bg-vermelhoClaro">Sair</button>
            </div>
        </>
    );
}