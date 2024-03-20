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

    const nome = sessionStorage.getItem("userName");

    return (
        <>
            <div className="menu">
                <h1 className="rowdies bold-30">Olá {nome ? nome.split(" ")[0] : ''}</h1>
                <div className="menuItens">
                    <a href="/perfil-usuario" className="item roboto sbold-16">Perfil</a>
                    <a href="/perfil-usuario/mapa" className="item roboto sbold-16">Ver mapa</a>
                    <a href="/perfil-usuario/quiz" className="item roboto sbold-16">Quiz de Aptidão</a>
                    <a href="/perfil-usuario/historico" className="item roboto sbold-16">Histórico de Doações</a>
                    <a href="/perfil-usuario/agendamento" className="item roboto sbold-16">Agendar Doação</a>
                    <a href="/perfil-usuario/ranking" className="item roboto sbold-16">Ranking</a>
                </div>
                <button onClick={sairClick} className="btn bg-vermelhoClaro sbold-16">Sair</button>
            </div>
        </>
    );
}