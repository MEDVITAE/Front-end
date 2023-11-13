import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IQuiz {
    altura: number;
    peso: number;
}

const updateById = async (quizData: IQuiz): Promise<IQuiz | ApiException> => {
    try {
        const { data } = await Api().put(`/rota`, quizData);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }
}; 

export const QuizService = {
    updateById,
};

