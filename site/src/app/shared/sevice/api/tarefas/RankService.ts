import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IRank {
    nome?: string;
    totalDoado?: string
}

export interface IPosicao {
  posicao?: number
}

const getAll = async (): Promise<IRank[] | ApiException> => { 
    try{
        const { data } = await Api().get('/Doacao/Rank');
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};

const getById = async (): Promise<IPosicao | ApiException> => { 
    const idSession = sessionStorage.getItem('id'); 
    try{
        const { data } = await Api().get(`/Doacao/Posicao/${idSession ? idSession : ''}`);
        return data;
    }
    catch (error: any){
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};




export const RankService = {
    getAll,
    getById
   
};