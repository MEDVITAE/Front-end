import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IEndereco {
cep:string;
fkHospital: number
}

export interface ICoords {
   lat: number;
    lng: number;
   
}



const getAll = async (): Promise<IEndereco[] | Error> => {

    try {
      const { data } = await Api().get('/Endereco/mapa');
      return data;
    } catch (error) {
      return new Error(error instanceof Error ? error.message : 'Erro ao consultar Api.');
    }
  };
  




export const EnderecoService = {
    getAll, 
};