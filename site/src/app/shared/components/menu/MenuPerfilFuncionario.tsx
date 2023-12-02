import '../../../../html-css-template/css/menu.css';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

interface IMenuPerfil{
    nome: string;
}

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2100,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export const MenuPerfilFuncionario: React.FC<IMenuPerfil> = () => {
    const navegando = useNavigate();
    
    const sairClick = async () => {
        Toast.fire({
            icon: "success",
            title: "Saindo... Para retornar a esta tela, realize novamente o login."
        });
        await new Promise(resolve => setTimeout(resolve, 2000));

        sessionStorage.clear();
        navegando('/pagina-inicial');

    };

    return (
        <>
            <div className="menu">
            <h1 className="rowdies bold-30">Olá {sessionStorage.getItem("userName")}</h1>
                <div className="menuItens">
                    <a href="/perfil-funcionario/cadastro-funcionario" className="item roboto sbold-20">Cadastro Funcionario</a>
                    <a href="/perfil-funcionario/requisicao-sangue" className="item roboto sbold-20">Requisitar Doação</a>
                    <a href="/perfil-funcionario/registro-doacao" className="item roboto sbold-20">Cadastrar Doação</a>
                    <a href="/perfil-funcionario/agenda" className="item roboto sbold-20">Agenda de Doações</a>
                </div>
                <button onClick={sairClick} className="btn bg-vermelhoClaro">Sair</button>
            </div>
        </>
    );
}