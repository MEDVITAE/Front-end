import { useEffect } from 'react';
import '../../../../html-css-template/css/perfil.css'

import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { Anexo } from '../../../shared/contexts';
import { TarefasService } from '../../../shared/sevice/api/tarefas/TarefasService';

const Anexar = () =>{
    useEffect(() =>{
        Anexo();
    }, []); 
}

export const Perfil = () => {
    Anexar();
    
    return (
        <>
            <OndaLateralEsquerda />
            <main className='mainPerfil'>
                <MenuPerfilUsuario nome="Diego" />
                <div className="divPerfil">
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
                                <input className="campoUsuario roboto bold-30" type="text" placeholder='Nome Completo'/>
                                <input className="campoUsuario roboto bold-30" type="text" placeholder='CPF'/>
                                <input className="campoUsuario roboto bold-30" type="text" placeholder='CEP'/>
                                <input className="campoUsuario roboto bold-30" type="number" placeholder='Número'/>
                            </div>
                            <div className="statusBoxItemColmun">
                                <input className="campoUsuario roboto bold-30" type="text" placeholder='Sexo Biológico'/>
                                <input className="campoUsuario roboto bold-30" type="text" placeholder='Data de Nascimento (dd/mm/aaaa)'/>
                                <input className="campoUsuario roboto bold-30" type="double" placeholder='Peso'/>
                                <input className="campoUsuario roboto bold-30" type="double" placeholder='Altura'/>
                            </div>
                            <div className="statusBoxItemColmun">
                                <input className="campoUsuario roboto bold-30" type="email" placeholder='Email'/>
                                <label className="picture" htmlFor="picture__inputPerfil" tabIndex={0}>
                                    <span className="picture__image"></span>
                                </label>

                                <input type="file" name="picture__inputPerfil" id="picture__inputPerfil" />
                            </div>
                        </div>
                        <div className="btnBoxItem">
                            <button className="btn bg-vermelhoClaro bold-30">Editar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}