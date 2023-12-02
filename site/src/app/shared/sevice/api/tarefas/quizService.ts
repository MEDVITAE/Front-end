import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IQuiz {
    altura: number;
    peso: number;
    apto: boolean;
}   

const updateById = async (id: String | null, dataToUpdate: IQuiz): Promise<IQuiz | ApiException> => {
    try {
        console.log(dataToUpdate);
        console.log('Dados antes da chamada API:', dataToUpdate);
        const { data } = await Api().put(`/Caracteristicas/detalhes/${id}`, dataToUpdate);
        console.log('Resposta da chamada API:', data);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }
};

export const QuizService = {
    updateById,
};