import { useCallback, useState } from "react";

import Swal from 'sweetalert2';

import '../../../../html-css-template/css/telaRequisicao.css'

import { TarefasService, IEnviaEmail } from "../../../shared/sevice/api/tarefas/TarefasService";

import { vetorIcon } from "../../../shared/components/imagens";
import { MenuPerfilFuncionario } from "../../../shared/components";

export const Requisicao = () => {

    const modalErro = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
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

    const modalSucesso = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
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

    const vetorExemplo = [
        {
            nome: "Pedro Afonso",
            tipo: "A+",
        }, {
            nome: "Vinicios Garcia",
            tipo: "O-",
        }, {
            nome: "Diana silva",
            tipo: "B-",
        }, {
            nome: "João Tenório",
            tipo: "AB+",
        }, {
            nome: "Willian Paternezi",
            tipo: "O+",
        }, {
            nome: "Lilian Souza",
            tipo: "A+",
        }, {
            nome: "Mayara Souza",
            tipo: "A+",
        }, {
            nome: "Sonia Dornelas",
            tipo: "O-",
        }, {
            nome: "Daniel Sebastian",
            tipo: "A-",
        }, {
            nome: "Matheus Ribeiro",
            tipo: "B+",
        }, {
            nome: "Gabriel Kenji",
            tipo: "B+",
        }, {
            nome: "Maria de Fatima",
            tipo: "O+",
        }, {
            nome: "Maessio Damasceno",
            tipo: "AB-",
        }, {
            nome: "Diego Costa",
            tipo: "B-",
        }, {
            nome: "Isabela Crispin",
            tipo: "O-",
        }, {
            nome: "Samuel Vinicios",
            tipo: "A+",
        }, {
            nome: "Amanda Garcia",
            tipo: "O-",
        }, {
            nome: "Junior Tavares",
            tipo: "O-",
        }, {
            nome: "Silvio Pintor",
            tipo: "O-",
        }, {
            nome: "Maria Eduarda",
            tipo: "O-",
        }, {
            nome: "Caio Ruiz",
            tipo: "A+",
        }, {
            nome: "Eduardo Gusta",
            tipo: "O-",
        }, {
            nome: "Emilie silva",
            tipo: "AB-",
        }, {
            nome: "Maria Eva",
            tipo: "AB+",
        }, {
            nome: "Enzo Medej",
            tipo: "B+",
        }, {
            nome: "Gustavo Miranda",
            tipo: "B+",
        }, {
            nome: "Miriam Souza",
            tipo: "B+",
        }, {
            nome: "Bianca Vascon",
            tipo: "B+",
        }, {
            nome: "Laercio Pedro",
            tipo: "A-",
        }, {
            nome: "Eduardo Gabriel",
            tipo: "A-",
        }, {
            nome: "Luiza Souza",
            tipo: "A-",
        }, {
            nome: "Thays Tavares",
            tipo: "AB+",
        }, {
            nome: "Lurdes Fonseca",
            tipo: "AB+",
        }, {
            nome: "Victor Gabriel",
            tipo: "AB-",
        }, {
            nome: "Samara Lurdes",
            tipo: "O+",
        }, {
            nome: "Vera Dornelas",
            tipo: "O+",
        }, {
            nome: "Neide Crispim",
            tipo: "O+",
        }, {
            nome: "Pedro Henrique",
            tipo: "O+",
        }, {
            nome: "Vinicios Tarciso",
            tipo: "O+",
        }, {
            nome: "Vera Tenório",
            tipo: "O+",
        }, {
            nome: "Arthur Moreira",
            tipo: "B-",
        }, {
            nome: "Guilherme Silva",
            tipo: "B-",
        }, {
            nome: "Matheus Siberio",
            tipo: "B-",
        }, {
            nome: "Pedro Batista",
            tipo: "B-",
        }, {
            nome: "Nayara Garcia",
            tipo: "B-",
        }, {
            nome: "Samuel Silva",
            tipo: "B-",
        }, {
            nome: "Carmem Mira",
            tipo: "AB-",
        }, {
            nome: "Maya Dornelas",
            tipo: "AB-",
        }, {
            nome: "Paulo Rogerio",
            tipo: "AB-",
        }, {
            nome: "Gabriel Lobos",
            tipo: "A+",
        },
    ]


    const [tipoSangue, setTipoSangue] = useState<{ nome: string; tipo: string; }[]>([]);

    const acharPorTipoSanguineo = useCallback((tipo: string) => {
        const doadoresFiltrados: { nome: string; tipo: string; }[] = vetorExemplo.filter(
            (doadorDaVez) => doadorDaVez.tipo === tipo
        );
        setTipoSangue(doadoresFiltrados);
    }, []);

    const alertarTodos = async () => {

        // Verifica se algum tipo sanguíneo foi selecionado
        if (tipoSangue.length === 0) {
            modalErro('Por favor, selecione um tipo sanguíneo antes de prosseguir.');
            return;
        }

        modalSucesso('Doadores alertados com sucesso!');

        try {
            const dadosEmail: IEnviaEmail = {
                ownerRef: 'Vitae',
                emailFrom: 'servicosvitae@gmail.com',
                emailTo: 'destinatario@gmail.com',
                subject: 'Notificação de doação',
                text: 'Bom dia, necessitamos do seu tipo sanguineo A+',
            };

            const response = await TarefasService.alertarDoadores(dadosEmail);


        } catch (error) {
            modalErro('Erro ao conectar com o backend');
        }
    };

    return (
        <>
            <MenuPerfilFuncionario nome="Paternezi" />
            <div className="conteudo">
                <div className="rowdies topo">
                    <div className="titulo">
                        <h1>REQUISITE DOAÇÕES</h1>
                    </div>

                    <div className="logo">
                        <img src="../assets/LogoVitai.png" alt="" />
                    </div>
                </div>
                <div className="ondas">
                    <div className="waves">
                        <img src="../assets/ONDA - MAPA.svg" alt="" />
                    </div>
                </div>
                <div className="containerTipos">
                    <div className="selectTipos roboto">
                        <h2>Selecione o tipo sanguíneo</h2>
                        <div className="tiposSanguineos">
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('O-')}>Tipo: O-</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('O+')}>Tipo: O+</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('AB-')}>Tipo: AB-</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('AB+')}>Tipo: AB+</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('B-')}>Tipo: B-</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('B+')}>Tipo: B+</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('A-')}>Tipo: A-</h3>
                            <h3 className="h3Req" onClick={() => acharPorTipoSanguineo('A+')}>Tipo: A+</h3>
                        </div>
                    </div>
                    <div className="selectDoadores roboto">
                        <h2>Doadores Dísponiveis</h2>
                        <div className="doadoresDisponiveis">

                            {tipoSangue.map((doador, index) => (
                                <div key={index} className="doador1">
                                    <p>Nome: {doador.nome}</p>
                                    <p>Tipo Sanguíneo: {doador.tipo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="embrulhoBtn">
                    <button className="btnCadastrar btn" onClick={alertarTodos}>
                        Alertar todos
                        <img src={vetorIcon[0]} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}