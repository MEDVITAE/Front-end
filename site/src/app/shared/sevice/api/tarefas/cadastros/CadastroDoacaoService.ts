import { Api } from "../../ApiConfig";
import { ApiException } from "../../ApiException";

export interface ICadastroDoacao {
    idAgenda: string;
    tipo?: string;
    cpf: string;
    nome: string;
    nascimento: string;
    cep: string;
    email: string;
    sexo: string;
    numeroCasa: string;
}

export interface ICadastroDoacaoCreate {
    quantidade: number;
    tipo: string;
    fkAgenda: string | null;
}

const getByCpf = async (cpf : string): Promise<ICadastroDoacao | ApiException> => {
    try {

        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        };

        const { data } = await Api().get(`/usuario/detalhesDoacao/${cpf}`, config);
   
        return data;

    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }
};

const create = async (dataToCreate: ICadastroDoacaoCreate): Promise<ICadastroDoacaoCreate | ApiException> => {
    try {

        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        const { data } = await Api().post<any>('/Doacao', dataToCreate, config);
        
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }
};

export const CadastroDoacaoService = {
    create,
    getByCpf
};