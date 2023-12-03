import { Route, Routes as Switch, Navigate, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import '../../html-css-template/css/geral.css';
import { useState } from "react";

import {
    AgendaHistorico,
    Agendamento, Cadastro, CadastroDados,
    CadastroDoacao, CadastroEmpresa, CadastroEmpresaDados, CadastroFuncionario,
    Historico, HospitalDetalhes, Login,
    Mapa, PaginaInicial, Perfil,
    Quiz, Ranking, Requisicao, SaibaMais
} from "../pages";

export const Routes = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial/saiba-mais" element={<SaibaMais />} />

                <Route path="/cadastro-usuario" element={<Cadastro />} />
                <Route path="/cadastro-usuario/complementar" element={<CadastroDados />} />
                <Route path="/cadastro-empresa" element={<CadastroEmpresaDados />} />
                <Route path="/cadastro-empresa/complementar" element={<CadastroEmpresa />} />

                <Route path="/login" element={<Login />} />
                <Route path="/perfil-usuario" element={<Perfil />} />
                <Route path="/perfil-usuario/ranking" element={<Ranking />} />
                <Route path="/perfil-usuario/quiz" element={<Quiz />} />
                <Route path="/perfil-usuario/mapa" element={<Mapa />} />
                <Route path="/perfil-usuario/mapa/detalhes" element={<HospitalDetalhes />} />
                <Route path="/perfil-usuario/historico" element={<Historico />} />
                <Route path="/perfil-usuario/agendamento" element={<Agendamento />} />

                <Route path="/perfil-funcionario/registro-doacao" element={<CadastroDoacao />} />
                <Route path="/perfil-funcionario/cadastro-funcionario" element={<CadastroFuncionario />} />
                <Route path="/perfil-funcionario/agenda" element={<AgendaHistorico />} />
                <Route path="/perfil-funcionario/requisicao-sangue" element={<Requisicao />} />

                <Route path="*" element={<Navigate to={"/pagina-inicial"} />} />
            </Switch>
        </BrowserRouter>
    );
}