import '../../../../html-css-template/css/telaDetalheHospital.css'
import { useState, useEffect } from 'react';

import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { HospitalService, IHospital } from "../../../shared/sevice/api/tarefas/HospitalService";
import Swal from 'sweetalert2';

export const HospitalDetalhes = () => {
    const [Hosp, setHosp] = useState<IHospital | null>(null);

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

    useEffect(() => {
        HospitalService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    showWrongForm(result.message);
                } else {
                    setHosp(result);
                }
            })
            .catch((error) => {
                showWrongForm(error.message || 'Erro ao buscar dados.');
            });
    }, []);


    return (
        <>
            <OndaLateralEsquerda />
            <div className="flexContainer">
                <MenuPerfilUsuario nome="Diego" />
                <div className="conteudoHospital">
                    <div className="containerHospital">
                        <a href="/perfil-usuario/mapa" >
                            <h1 className="rowdies bold-30">VER MAPA</h1>
                        </a>
                    </div>
                    <div className="primeiroQuadro">
                        <h2 className="titleQuadro roboto sbold-24">Disponível</h2>
                        <div className="textosQuadro">
                            <p className="roboto sbold-16">Hospital {Hosp?.nome}</p>

                            <p className="roboto sbold-16">Descrição: Local destinado ao atendimento de Doadores de sangue</p>

                            <p className="roboto sbold-16">Endereço:{Hosp?.rua}, {Hosp?.numero} -  {Hosp?.bairro}</p>

                            <p className="roboto sbold-16">Atendimento: Seg a Sab - 8:30 ás 20:30 para doação de sangue</p>
                        </div>
                    </div>

                    <div className="primeiroQuadro">
                        <h2 className="titleQuadro roboto sbold-24">Prioridade de doações</h2>
                        <div className="textosQuadro">
                            <div className="flexColumn">
                                <p className="roboto sbold-16 mgAtm">Sangue:
                                    Tipo Sanguineo O+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Sim</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>

                            <div className="flexColumn">
                                <p className="roboto sbold-16">Sangue:
                                    Tipo Sanguineo A+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Nao</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>

                            <div className="flexColumn">
                                <p className="roboto sbold-16">Sangue:
                                    Tipo Sanguineo B+</p>
                                <select className="opitionUm">
                                    <option disabled selected>Nao</option>
                                    <option value="">Sim</option>
                                    <option value="Feminino">Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}