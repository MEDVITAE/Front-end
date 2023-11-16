import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IQuiz {
    altura: number;
    peso: number;
    apto: boolean;
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

// import { Api } from "../ApiConfig";
// import { ApiException } from "../ApiException";

// export interface IQuiz {
//     id: number;
//     altura: number;
//     peso: number;
//     apto: boolean;
// }   

// const updateById = async (id: number, dataToUpdate: IQuiz): Promise<IQuiz | ApiException> => {
//     try {
//         const { data } = await Api().put(`/rota/${id}`, dataToUpdate);
//         return data;
//     }
//     catch (error: any) {
//         return new ApiException(error.message || 'Erro ao atualizar registro.');
//     }

// };

// export const QuizService = {
//     updateById,
// };