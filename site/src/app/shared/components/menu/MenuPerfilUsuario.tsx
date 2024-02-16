import { useCallback, useState } from 'react';
import '../../../../css/menu.css';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


interface IMenuPerfil {
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

export const MenuPerfilUsuario: React.FC<IMenuPerfil> = () => {
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

    var localhost3000 = "http://localhost:3000";

    // Estado para armazenar as URLs acessadas
    const [urlsAcessadas, setUrlsAcessadas] = useState<string[]>([]);

    const handleClick = useCallback(
        (url: string) => {
            setUrlsAcessadas((prevUrls) => {
                const newUrls = [...prevUrls, url];
                return newUrls;
            });
        },
        [setUrlsAcessadas]
    );

    const nome = sessionStorage.getItem("userName");

    return (
        <>
            <div className="menu">
                <h1 className="rowdies bold-30">Olá {nome ? nome.split(" ")[0] : ''}</h1>
                <div className="menuItens">

                    <Link to="/perfil-usuario"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario")}
                        className="item roboto sbold-16">Perfil
                    </Link>

                    <Link to="/perfil-usuario/mapa"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/mapa")}
                        className="item roboto sbold-16">Ver mapa
                    </Link>

                    <Link to="/perfil-usuario/quiz"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/quiz")}
                        className="item roboto sbold-16">Quiz de Aptidão
                    </Link>

                    <Link to="/perfil-usuario/historico"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/historico")}
                        className="item roboto sbold-16">Histórico de Doações
                    </Link>

                    <Link to="/perfil-usuario/agendamento"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/agendamento")}
                        className="item roboto sbold-16">Agendar Doação
                    </Link>

                    <Link to="/perfil-usuario/ranking"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/ranking")}
                        className="item roboto sbold-16">Ranking
                    </Link>
                </div>
                <button onClick={sairClick} className="btn bg-vermelhoClaro sbold-16">Sair</button>
            </div>
        </>
    );
}