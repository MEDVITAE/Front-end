import { Api } from "../../ApiConfig";
import { ApiException } from "../../ApiException";

export interface ICadastroFuncionario {
    email: string | null;
    senha: string | null;
    role: string; 
    nome: string;
    cpf: string;
}

const create = async (dataToCreate: ICadastroFuncionario): Promise<ICadastroFuncionario | ApiException> => {
    try {
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

export const CadastroFuncionarioService = {
    create
};