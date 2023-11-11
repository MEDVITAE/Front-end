import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IRank {
    email: string;
    nome: string;
    cpf: string;
}

const getAll = async (): Promise<IRank[] | ApiException> => { 
    try{
        const { data } = await Api().get('/Agenda/buscarDoadorAgendado/09:30');
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};




export const RankService = {
    getAll,
   
};