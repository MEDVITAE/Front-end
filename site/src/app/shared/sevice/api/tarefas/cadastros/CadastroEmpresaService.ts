import { Api } from "../../ApiConfig";
import { ApiException } from "../../ApiException";

export interface ICadastroEmpresa {
    id?: string;
    nome: string;
    email: string | null;
    senha: string | null;
    cnpj: string;
}

const create = async (dataToCreate: ICadastroEmpresa): Promise<ICadastroEmpresa | ApiException> => {
    try {

        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        const { data } = await Api().post<any>('/hospital', dataToCreate, config);


        sessionStorage.setItem("idHospital", data.idHospital);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }
};

export const CadastroEmpresaService = {
    create
};