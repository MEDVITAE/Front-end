import { useCallback, useState } from 'react';
import '../../../../html-css-template/css/menu.css';
import { Link } from 'react-router-dom';


interface IMenuPerfil {
    nome: string;
}

export const MenuPerfilUsuario: React.FC<IMenuPerfil> = ({ nome }) => {

    var localhost3000 = "http://localhost:3000";

    // Estado para armazenar as URLs acessadas
    const [urlsAcessadas, setUrlsAcessadas] = useState<string[]>([]);


    const handleClick = useCallback(
        (url: string) => {
            console.log('Clicou no link:', url);
            setUrlsAcessadas((prevUrls) => {
                console.log('Antes da atualização:', prevUrls);
                const newUrls = [...prevUrls, url];
                console.log('Depois da atualização:', newUrls);
                return newUrls;
            });
        },
        [setUrlsAcessadas]
    );

    console.log(urlsAcessadas);

    return (
        <>
            <div className="menu">
                {/* <button onClick={handleBack}>voltar</button> */}
                <h1 className="rowdies bold-30">Olá, {nome}</h1>
                <div className="menuItens">

                    <Link to="/perfil-usuario"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario")}
                        className="item roboto bold-30">Perfil
                    </Link>

                    <Link to="/perfil-usuario/mapa"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/mapa")}
                        className="item roboto bold-30">Ver mapa
                    </Link>

                    <Link to="/perfil-usuario/quiz"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/quiz")}
                        className="item roboto bold-30">Quiz de Aptidão
                    </Link>

                    <Link to="/perfil-usuario/historico"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/historico")}
                        className="item roboto bold-30">Histórico de Doações
                    </Link>

                    <Link to="/perfil-usuario/agendamento"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/agendamento")}
                        className="item roboto bold-30">Agendar Doação
                    </Link>

                    <Link to="/perfil-usuario/ranking"
                        onClick={() => handleClick(localhost3000 + "/perfil-usuario/ranking")}
                        className="item roboto bold-30">Ranking
                    </Link>
                </div>
                <button className="btn bg-vermelhoClaro bold-30">Sair</button>
            </div>
        </>
    );
}