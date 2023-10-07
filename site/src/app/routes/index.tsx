import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { PaginaInicial } from "../pages/inicio";
import { Cadastro } from "../pages/cadastro";
import { Login } from "../pages/login/Login";
import { Perfil } from "../pages/usuario/perfil";
import { Ranking } from "../pages/usuario/ranking";
import { Quiz } from "../pages/usuario/quiz";
import { Mapa } from "../pages/usuario/mapa";
import { Historico } from "../pages/usuario/historico";
import { Agendamento } from "../pages/usuario/agenda";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/peril-usuario" element={<Perfil />} />
                <Route path="/peril-usuario/mapa" element={<Mapa />} />
                <Route path="/peril-usuario/mapa/detalhes" element={<PaginaInicial />} />
                <Route path="/peril-usuario/quiz" element={<Quiz />} />
                <Route path="/peril-usuario/historico-doacao" element={<Historico />} />
                <Route path="/peril-usuario/agendar" element={<Agendamento />} />
                <Route path="/peril-usuario/ranking" element={<Ranking />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />

                <Route path="*" element={<Navigate to={"/pagina-inicial"} />} />
            </Switch>
        </BrowserRouter>
    );
}