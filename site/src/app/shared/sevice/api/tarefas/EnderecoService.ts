import { Api } from "../ApiConfig";

export interface IEndereco {
  cep: string;
  fkHospital: number
}

export interface ICoords {
  lat: number;
  lng: number;

}
const getAll = async (): Promise<IEndereco[] | Error> => {
  const tokenSession = sessionStorage.getItem('token');

  const headers = {
    'Authorization': `Bearer ${tokenSession ? tokenSession : ''}`,
    'Content-Type': 'application/json',
  };

  try {
    const { data } = await Api().get('/Endereco/mapa', { headers });
    return data;
  } catch (error) {
    return new Error(error instanceof Error ? error.message : 'Erro ao consultar Api.');
  }
};





export const EnderecoService = {
  getAll,
};

