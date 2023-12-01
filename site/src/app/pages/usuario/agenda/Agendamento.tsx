import '../../../../html-css-template/css/Agendamento.css'

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Agenda } from './components/Agenda';
import { Horario } from './components/Horario';
import { Hemocentro } from './components/Hemocentro';
import { vetorIcon } from '../../../shared/components/imagens';
import { MenuPerfilUsuario, OndaLateralEsquerda } from '../../../shared/components';
import Swal from 'sweetalert2';
import { TarefasService } from '../../../shared/sevice/api/tarefas/TarefasService';

export const Agendamento = () => {

    const [isMostrarHemo, setIsMostrarHemo] = useState(false);
    const [isMostrarHora, setIsMostrarHora] = useState(false);

    const tokenSession = sessionStorage.getItem('token');

    const navegando = useNavigate();

    const mostrarComponenteHemo = () => {
        if (isMostrarHora) setIsMostrarHora(false);
        setIsMostrarHemo(true);
    }

    const fecharComponenteHemo = () => {
        setIsMostrarHemo(false);
    }

    const mostrarComponenteHora = () => {
        if (isMostrarHemo) setIsMostrarHemo(false);
        setIsMostrarHora(true);
    }

    const fecharComponenteHora = () => {
        setIsMostrarHora(false);
    }

    const showConfirmForm = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "success",
            title: message
        });
    };

    const showWrongForm = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "error",
            title: message
        });
    };

    const validacao = () => {
        const dia = sessionStorage.getItem('data');
        const hemo = sessionStorage.getItem('hemocentro');
        const hora = sessionStorage.getItem('hora');

        if (dia === null) {
            showWrongForm("Nenhum dia foi selecionado. Escolha um para prosseguir.");
            return false;
        }
        else if (Number(hemo) === 0) {
            showWrongForm("Nenhum hemocentro foi selecionado. Escolha um para prosseguir.");
            return false;
        }
        else if (Number(hora) === 0) {
            showWrongForm("Nenhum horário foi selecionado. Escolha um para prosseguir.");
            return false;
        }
        else {
            return true;
        }
    };

    const agendar = useCallback(async () => {

        if (validacao()) {
            const idUsuario = sessionStorage.getItem('id');
            const idHemo = sessionStorage.getItem('hemocentro');
            const dia = sessionStorage.getItem('data');
            const hora = sessionStorage.getItem('hora');

            const horario = dia + "T" + hora + ":00";

            TarefasService.createAgendamento({
                fkHospital: Number(idHemo),
                fkUsuario: Number(idUsuario),
                Horario: horario ? horario : ''
            }, tokenSession ? tokenSession : '')
            .then(async (result) => {

                if(result instanceof Error){
                    showWrongForm("Houve um problema, aguarde e tente novamente.");
                } else {
                    showConfirmForm("Agendamento realizado com sucesso, indo para aba Histórico");
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    navegando("/perfil-usuario/historico");
                    sessionStorage.removeItem('data');
                    sessionStorage.removeItem('hemocentro');
                    sessionStorage.removeItem('hora');
                }
            });
        }
    }, []);



    return (
        <>
            <OndaLateralEsquerda />
            <div className="container">
                <MenuPerfilUsuario nome="Diego" />
                <div className="agenda">
                    <header className="tituloAgenda">
                        <h1 className="rowdies">AGENDA</h1>
                    </header>
                    <Agenda />
                    {isMostrarHemo &&
                        <Hemocentro onChange={fecharComponenteHemo} />
                    }
                    {isMostrarHora &&
                        <Horario onChange={fecharComponenteHora} />
                    }
                </div>
                <div className="confirmar">
                    <div className="escolha">
                        <h2 className="rowdies">HEMOCENTRO</h2>
                        <button onClick={mostrarComponenteHemo} className="btn roboto bg-vermelhoClaro">
                            Escolha um Hemocentro
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                    <div className="escolha margem">
                        <h2 className="rowdies">HORÁRIO</h2>
                        <button onClick={mostrarComponenteHora} className="btn roboto bg-vermelhoClaro">
                            Escolha um Horário
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                    <div className="ok">
                        <button className="btn roboto bg-vermelhoClaro" onClick={agendar}>
                            Agendar
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}