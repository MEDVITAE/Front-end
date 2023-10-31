import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    nome: string;
    email: string | null;
    senha: string | null;
    role: string;
    cpf: string;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => { 
    try{
        const { data } = await Api().get('/swagger-ui.html');
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};

const getById = async (id: number): Promise<ITarefa | ApiException> => { 
    try{
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao consultar registro.');
    }

};

//Criar outro método para inserção de dados
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => { 
    try{
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => { 
    try{
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }

};

const deleteById = async (id: number): Promise<undefined | ApiException> => { 
    try{
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};