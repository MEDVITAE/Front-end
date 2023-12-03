import { id } from "date-fns/locale";
import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";
import { AxiosResponse } from 'axios';

export interface IPrimeiroCadastro {
    idUsuario: number;
    nome: string;
    email: string | null;
    senha: string | null;
    role: string;
    cpf: string;
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

export interface ISegundoCadastroCaracteristicas{
    peso :string;
    altura : string;
    tatto: boolean;
    sexo: string;
    nascimento: string;
    apto: boolean;
    fkUsuario: number;
}

export interface IEnviaEmail {
    ownerRef: string;
    emailFrom: string;
    emailTo: string;
    subject: string;
    text: string;
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
    logradouro: string;
  }
  
export interface IHistoricoDeAgendamento {
    quantidade: number;
    quantidadeDoacao: number;
    agenda: IAgendaParaHistorico[];
    hospital: IHospitalParaHistorico[];
  }

export interface ICriarAgendamento {
    fkUsuario: number;
    fkHospital: number;
    Horario: string;
}


export interface IEnviaEmail {
    ownerRef: string;
    emailFrom: string;
    emailTo: string;
    subject: string;
    text: string;
}


type THistorico = {
    data: IHistoricoDeAgendamento;
}

type THemocentroComTotalCount = {
    data: IListagemHemocentro[];
}

type TAgenda = {
    data: IAgenda[];
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

const postDetalhesUsuario = async (id: string, detalhesToUpdate: IDetalheUserUpdate, caracteristicasToUpdate: IUserCaracteristicasUpdate, enderecoToUpdate: IUserEnderecoUpdate): Promise<void> => {

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
    }
};

const alertarDoadores = async (dataToEmail: IEnviaEmail): Promise<IEnviaEmail | ApiException> => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        
        const { data } = await Api().post('/fila/enviarEmails', dataToEmail, config);

        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao alertar doadores.');
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

//Criar outro método para inserção de dados
const createUsuario = async (dataToCreate: Omit<IPrimeiroCadastro, 'idUsuario'>): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        console.log('Resposta do createUsuario:', data);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};


const createUsuarioEndereco = async (dataToCreate: ISegundoCadastroEndereco, token: string): Promise<ISegundoCadastroEndereco | ApiException> => {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      const { data } = await Api().post<any>('/Endereco', dataToCreate, { headers });
      return data;
    } catch (error: any) {
      return new ApiException(error.message || 'Erro ao criar registro.');
    }
  };

  const createUsuarioCaracteristicas = async (dataToCreate: ISegundoCadastroCaracteristicas, token: string): Promise<ISegundoCadastroCaracteristicas | ApiException> => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`
        }
        const { data } = await Api().post<any>('/Caracteristicas', dataToCreate, { headers });
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
    postArquivo,
    alertarDoadores,
    getArquivo,
    postDetalhesUsuario,
    getAgendamentosCSV,
    getAgendamentos,
    createAgendamento,
    createUsuario,
    createUsuarioEndereco,
    createUsuarioCaracteristicas,
    updateById,
    deleteById,
    deleteByIdAgedamento,
};