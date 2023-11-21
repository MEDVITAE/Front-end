import { Api } from "../../ApiConfig";
import { ApiException } from "../../ApiException";

export interface ICadastroEmpresaEndereco {
    cidade: string;
    bairro: string;
    cep: number;
    logradouro: string;
    rua: string;
    numero: number;
    fkUsuario: null;
    fkHospital: string | null;
}

const create = async (dataToCreate: ICadastroEmpresaEndereco): Promise<ICadastroEmpresaEndereco | ApiException> => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        };

        const { data } = await Api().post<any>('/Endereco', dataToCreate, config);
        
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro de endereço.');
    }
};

export const CadastroEmpresaEnderecoService = {
    create
};