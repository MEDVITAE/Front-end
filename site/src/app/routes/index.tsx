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

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />

                <Route path="*" element={<Navigate to={"/pagina-inicial"} />} />
            </Switch>
        </BrowserRouter>
    );
}