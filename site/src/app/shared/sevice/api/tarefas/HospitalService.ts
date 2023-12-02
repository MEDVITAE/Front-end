import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IHospital {
    nome: string;
    rua: String;
    cep: String;
    numero:number;
    bairro: String;
}


const getAll = async (): Promise<IHospital  | Error> => {
    
const id = sessionStorage?.getItem("idHospital")
    try {
        const { data } = await Api().get(`/hospital/detalhes/${id}`);
        console.log("data", data)
        return data;
    } catch (error) {
        return new Error(error instanceof Error ? error.message : 'Erro ao consultar Api.');
    }
};





export const HospitalService = {
    getAll,
};