import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import '../../css/geral.css';
import 'react-calendar/dist/Calendar.css';
import '../../css/Agenda.css';
import '../../css/AgendaDoacao.css';
import '../../css/Agendamento.css';
import '../../css/Cadastro.css';
import '../../css/CadastroDoacao.css';
import '../../css/dados.css';
import '../../css/HemocentroEHorario.css';
import '../../css/HistoricoDoacao.css';
import '../../css/homocentro.css';
import '../../css/index.css';
import '../../css/login.css';
import '../../css/maps.css';
import '../../css/menu.css';
import '../../css/novoFuncionario.css';
import '../../css/perfil.css';
import '../../css/telaAptidao.css';
import '../../css/telaDetalheHospital.css';
import '../../css/telaRanking.css';
import '../../css/telaRequisicao.css';
import '../../css/telaSaibaMais.css';

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
                <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
                <Route path="/cadastro-empresa/complementar" element={<CadastroEmpresaDados />} />

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