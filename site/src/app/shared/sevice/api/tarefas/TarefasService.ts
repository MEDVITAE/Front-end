import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IPrimeiroCadastro {
    id: number;
    nome: string;
    email: string | null;
    senha: string | null;
    role: string;
    cpf: string;
}

export interface IDetalheUser {
    quantidade: number;
    tipo: string;
    nome: string;
    cpf: string;
    cep: string;
    numeroCasa: string;
    sexo: string;
    nascimento: string;
    peso: string;
    email: string;
    numero: string;
    altura: string;
    apto: string;
}

export interface IDetalheUserUpdate {
    email: string;
    cpf: string;
    role: string | null;
    nome: string;
}

export interface IUserCaracteristicasUpdate {
    peso: string;
    altura: string;
    sexo: string;
    nascimento: string;
}

export interface IUserEnderecoUpdate {
    cep: string;
    numero: string;
}

export interface ISegundoCadastroEndereco {
    cidade: string;
    bairro: string;
    cep: string;
    logradouro: string;
    rua: string;
    numero: number;
    fkUsuario: number;
}

export interface ISegundoCadastroCaracteristicas {
    peso: string;
    altura: string;
    tatto: boolean;
    sexo: string;
    nascimento: string;
    apto: boolean;
    fkUsuario: number;
}

export interface ILogin {
    email: string;
    senha: string;
}

export interface ITokenId {
    Id: string;
    token: string;
    userRole: string;
}

export interface IUserId {
    Id: string;

}

export interface IListagemHemocentro {
    idHospital: number;
    nome: string;
}

export interface IListagemDeHorarioDisponivel {
    id: number;
    hora: number;
    hospital?: IListagemHemocentro[];
}

export interface IAgendamento {
    id: number;
    pontos: number;
    horaMarcada: IListagemDeHorarioDisponivel;
    hospital: IListagemHemocentro;
}

export interface IAgenda {
    idAgendamento: number;
    fkHospital: number;
    horario: Date;
}

export interface ICriarAgendamento {
    fkUsuario: number;
    fkHospital: number;
    Horario: string;
}

export interface IAgendaParaHistorico {
    idAgenda: number;
    fkHospital: number;
    fkUsuario: number;
    horario: Date;
  }
  
export interface IHospitalParaHistorico {
    id: number;
    nome: string;
    rua: string;
  }
  
export interface IHistoricoDeAgendamento {
    quantidade: number;
    quantidadeDoacao: number;
    agenda: IAgendaParaHistorico[];
    hospital: IHospitalParaHistorico[];
  }

type THoraDisponivelComTotalCount = {
    data: IListagemHemocentro[];
}

type THemocentroComTotalCount = {
    data: IListagemHemocentro[];
}

type TAgenda = {
    data: IAgenda[];
}

type THistorico = {
    data: IHistoricoDeAgendamento;
}

const getAll = async (): Promise<IPrimeiroCadastro[] | ApiException> => {
    try {
        const { data } = await Api().get('/swagger-ui.html');
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};

const getAllHistorico = async (id: string, token: string): Promise<THistorico | ApiException> => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const { data } = await Api().get(`/Agenda/Agendamentos/${id}`, { headers });

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getAllHistoricoAgendamento = async (token: string): Promise<TAgenda | ApiException> => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const { data } = await Api().get('/Agenda', { headers });

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getAllHoraDisponivel = async (): Promise<THoraDisponivelComTotalCount | Error> => {
    try {

        const { data } = await Api().get('/');

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getAllHospital = async (filter = '', token: string): Promise<THemocentroComTotalCount | Error> => {
    try {
        const urlRelativa = `/hospital?nome_like=${filter}`;

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const { data } = await Api().get(urlRelativa, { headers });
        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getById = async (id: number): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar registro.');
    }

};

const postLogin = async (dataToUpdate: ILogin): Promise<ITokenId | ApiException> => {
    try {
        const { data } = await Api().post(`/auth/login`, dataToUpdate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao realizar o login.');
    }

};

const getDetalhesUsuario = async (id: string): Promise<IDetalheUser | ApiException> => {
    try {
        const { data } = await Api().get(`/usuario/detalhes/${id}`);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar detalhes do usuario');
    }

};

const postDetalhesUsuario = async (id: string, detalhesToUpdate: IDetalheUserUpdate, caracteristicasToUpdate: IUserCaracteristicasUpdate, enderecoToUpdate: IUserEnderecoUpdate): Promise<void> => {

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    };

    try {
        await Api().put(`/usuario/${id}`, detalhesToUpdate, config);
    } catch (error: any) {
        alert(error)
    }
    try {
        await Api().put(`/Caracteristicas/${id}`, caracteristicasToUpdate, config);
    } catch (error: any) {
        alert(2)
    }
    try {
        await Api().put(`/Endereco/detalhes/${id}`, enderecoToUpdate, config);
    } catch (error: any) {
        alert(3)
    }

};

const createAgendamento = async (dataToCreate: ICriarAgendamento, token: string): Promise<ICriarAgendamento | ApiException> => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const { data } = await Api().post<any>('/Agenda', dataToCreate, { headers });
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const createUsuario = async (dataToCreate: Omit<IPrimeiroCadastro, 'id'>): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const createUsuarioEndereco = async (dataToCreate: ISegundoCadastroEndereco): Promise<ISegundoCadastroEndereco | ApiException> => {
    try {
        const { data } = await Api().post<any>('/Endereco', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const createUsuarioCaracteristicas = async (dataToCreate: ISegundoCadastroCaracteristicas): Promise<ISegundoCadastroCaracteristicas | ApiException> => {
    try {
        const { data } = await Api().post<any>('/Caracteristicas', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const updateById = async (id: number, dataToUpdate: IPrimeiroCadastro): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }

};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

const deleteByIdAgedamento = async (id: string, token: string): Promise<undefined | Error> => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        await Api().delete(`/Agenda/${id}`, { headers });
        return undefined;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

export const TarefasService = {
    getAll,
    getAllHospital,
    getAllHistorico,
    getAllHistoricoAgendamento,
    getById,
    postLogin,
    getDetalhesUsuario,
    postDetalhesUsuario,
    createAgendamento,
    createUsuario,
    createUsuarioEndereco,
    createUsuarioCaracteristicas,
    updateById,
    deleteById,
    deleteByIdAgedamento,
};