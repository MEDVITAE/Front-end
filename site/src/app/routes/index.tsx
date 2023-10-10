import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { PaginaInicial } from "../pages/inicio";
import { Cadastro, CadastroDados, CadastroEmpresa } from "../pages/cadastro";
import { Login } from "../pages/login/Login";
import { Perfil } from "../pages/usuario/perfil";
import { Ranking } from "../pages/usuario/ranking";
import { Quiz } from "../pages/usuario/quiz";
import { HospitalDetalhes, Mapa } from "../pages/usuario/mapa";
import { Historico } from "../pages/usuario/historico";
import { Agendamento } from "../pages/usuario/agenda";
import { SaibaMais } from "../pages/inicio/saiba-mais";
import { CadastroDoacao } from "../pages/funcionario/cadastro-doacao";
import { CadastroFuncionario } from "../pages/funcionario/cadastro-funcionario";
import '../../html-css-template/css/geral.css';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial/saiba-mais" element={<SaibaMais />} />
                <Route path="/cadastro-usuario" element={<Cadastro />} />
                <Route path="/cadastro-usuario" element={<CadastroDados />} />
                <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
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
                <Route path="/perfil-usuario/" element={<Perfil />} />
                <Route path="/perfil-usuario/" element={<Perfil />} />
                <Route path="*" element={<Navigate to={"/pagina-inicial"} />} />
            </Switch>
        </BrowserRouter>
    );
}