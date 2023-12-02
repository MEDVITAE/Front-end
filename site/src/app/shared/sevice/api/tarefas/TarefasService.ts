import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";
import { AxiosResponse } from 'axios';

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

export interface IAgendamentosHospital {
    idAgenda: number;
    cpf: string;
    nome: string;
    data: string;
    hora: string;
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
    nome: string;
    fkHospital: string | null;
}

export interface IUserId {
    Id: string;

}

export interface IListagemHemocentro {
    id: number;
    nome: string;
    cep: string;
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

type THoraDisponivelComTotalCount = {
    data: IListagemHemocentro[];
}

type THemocentroComTotalCount = {
    data: IListagemHemocentro[];
}

export interface IHistoricoAgendamento {
    id: number;
    agenda: IAgendamento;
}

type THistoricoAgendamento = {
    data: IHistoricoAgendamento[];
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

const getAllHistoricoAgendamento = async (): Promise<THistoricoAgendamento | Error> => {
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


const getAllHospital = async (filter = ''): Promise<THemocentroComTotalCount | Error> => {
    try {
        const urlRelativa = `/hemocentro?nomeCompleto_like=${filter}`;

        const { data } = await Api().get(urlRelativa);

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

const postArquivo = async (file: File, id: string): Promise<ITokenId | ApiException> => {

    try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('id', id); // Adiciona o arquivo com o nome 'image' no FormData
        // Adicione o ID como um parâmetro de URL

        const response = await Api().post("http://localhost:8082/arquivos", formData, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem("token")}`
          }})

          return response.data;

    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao realizar o upload do arquivo.');
    }
};


const getArquivo = async (id: string): Promise<File> => {
    const config = {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      },
      responseType: 'arraybuffer' as const // Define o tipo de resposta como arraybuffer
    };
  
    try {
      const response: AxiosResponse<ArrayBuffer> = await Api().get(`/arquivos/${id}`, config);
      const fileData = new Blob([response.data], { type: 'application/octet-stream' }); // Cria um Blob a partir dos bytes
  
      // Constrói um objeto File a partir do Blob
      const file = new File([fileData], `nome_do_arquivo.extensao`, { lastModified: new Date().getTime() });
  
      return file;
    } catch (error: any) {
      throw new ApiException(error.message || 'Erro ao carregar documento do usuario');
    }
  };

const getAgendamentos = async (id: string): Promise<IAgendamentosHospital[] | ApiException> => {
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    };

    try {
        const response =  await Api().get(`/Agenda/listaAgendamentos/${id}`, config);
        console.log(response.data)
        return response.data;
    }
    catch (error: any) {
        throw new ApiException(error.message || 'Erro ao carregar agendamentos do hospital');
    }

};

const getAgendamentosCSV = async (id: string): Promise<any | ApiException> => {
    try {
        const { data } =  await Api().get(`/Agenda/dowload/agendamentos`);
        return data;
    }
    catch (error: any) {
        throw new ApiException(error.message || 'Erro ao baixar arquivo');
    }
};

const postDetalhesUsuario = async (id: string, detalhesToUpdate: IDetalheUserUpdate, caracteristicasToUpdate: IUserCaracteristicasUpdate, enderecoToUpdate: IUserEnderecoUpdate): Promise<boolean> => {

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    };

    try {
        await Api().put(`/usuario/${id}`, detalhesToUpdate, config);
        await Api().put(`/Caracteristicas/${id}`, caracteristicasToUpdate, config);
        await Api().put(`/Endereco/detalhes/${id}`, enderecoToUpdate, config);
    } catch (error: any) {
        throw new error.message;
    }

    return true;
};


const getByIdHistoricoAgendamentoAtual = async (id: number): Promise<IHistoricoAgendamento | Error> => {
    try {

        const { data } = await Api().get('/');

        return data;
    }
    catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

//Criar outro método para inserção de dados
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

const deleteByIdAgedamento = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

export const TarefasService = {
    getAll,
    getAllHospital,
    getById,
    postLogin,
    getDetalhesUsuario,
    postArquivo,
    getArquivo,
    postDetalhesUsuario,
    getAgendamentosCSV,
    getAgendamentos,
    getByIdHistoricoAgendamentoAtual,
    createUsuario,
    createUsuarioEndereco,
    createUsuarioCaracteristicas,
    updateById,
    deleteById,
    deleteByIdAgedamento,
};