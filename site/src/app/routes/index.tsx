import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import '../../html-css-template/css/geral.css';
import {
    Agendamento, Cadastro, CadastroDados,
    CadastroDoacao, CadastroEmpresa, CadastroFuncionario,
    Historico, HospitalDetalhes, Login,
    Mapa, PaginaInicial, Perfil,
    Quiz, Ranking, SaibaMais
} from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/pagina-inicial/saiba-mais" element={<SaibaMais />} />
                <Route path="/cadastro-usuario" element={<Cadastro />} />
                <Route path="/cadastro-usuario/complementar" element={<CadastroDados />} />
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