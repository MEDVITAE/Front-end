import { SetStateAction, useCallback, useRef, useState } from 'react';
import '../../../../html-css-template/css/telaAptidao.css'
import Swal from 'sweetalert2'
import { MenuPerfil, OndaLateralEsquerda } from "../../../shared/components";
import { vetorIcon, vetorImg } from '../../../shared/components/imagens';
import { useNavigate } from 'react-router-dom';
import { IQuiz, QuizService } from '../../../shared/sevice/api/tarefas/quizService';
import { ApiException } from '../../../shared/sevice/api/ApiException';
import { id } from 'date-fns/locale';


export const Quiz = () => {
    const [infUsuario, setInfUsuario] = useState<IQuiz>();
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [tatuagem, setTatuagem] = useState('');
    const [relacaoSexual, setRelacaoSexual] = useState('');
    const [desconforto, setDesconforto] = useState('');
    const [usoMedicamento, setUsoMedicamento] = useState('');
    const [dst, setDst] = useState('');
    const [vacinaCovid, setVacinaCovid] = useState('');
    const [apto, setApto] = useState(true);

    const handleAlturaChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAltura(event.target.value);
    };
    const handlePesoChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPeso(event.target.value);
    };
    const handleOptionChange = (event: { target: { value: string; }; }, setState: (arg0: string) => void) => {
        setState(event.target.value);
    };

    const navigate = useNavigate();

    const modalErro = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "error",
            title: message
        });
    };

    const modalInfo = async () => {
        await Swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            icon: 'info',
            title: 'Você está sendo direcionado para a tela de perfil.',
        });
    };

    const modalSucesso = async () => {
        await Swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            icon: 'success',
            title: 'Direcionando para a tela de perfil.',
        });
    };

    const funcaoAoClicar = useCallback(async () => {

        const camposVazios = [
            altura,
            peso,
            tatuagem,
            relacaoSexual,
            desconforto,
            usoMedicamento,
            dst,
            vacinaCovid
        ].some((campo) => campo.trim() === '');
        if (camposVazios) {
            modalErro("Por favor, preencha todos os campos do formulário.");
            return;
        }

        if (parseFloat(altura) <= 1 || parseFloat(altura) > 3) {
            modalErro("Altura inválida. Por favor, insira uma altura válida.");
            return;
        }

        setApto(true);

        if (tatuagem === 'sim' || dst === 'sim' || parseFloat(peso) < 50 || parseFloat(peso) >= 150) {
            setApto(false);
            console.log('Esta apto:', apto);
            await modalInfo();

            // Atualize o perfil apenas se o usuário não for apto
            if (!apto) {
                // Crie um objeto IQuiz com os dados do quiz
                const quizData: IQuiz = {
                    altura: parseFloat(altura),
                    peso: parseFloat(peso),
                    apto: apto,
                };

                // Chame a função updateById para atualizar o perfil
                const resultado = await QuizService.updateById(quizData);

                // Verifique se a atualização foi bem-sucedida
                if (resultado instanceof ApiException) {
                    modalErro("Erro ao atualizar perfil.");
                    return;
                }
            }
            setTimeout(() => navigate("/perfil-usuario"), 0);
        } else {
            await modalSucesso();
            setTimeout(() => navigate("/perfil-usuario"), 0);
        }
    }, [altura, peso, tatuagem, relacaoSexual, desconforto, usoMedicamento, dst, vacinaCovid, apto, navigate]);
    const seila = useCallback(() => {

    }, []);

    // ------------------------------------------
    //Tela
    // ------------------------------------------
    return (
        <>
            <OndaLateralEsquerda />
            <div className="flexContainer">
                <MenuPerfil nome="Diego" />
                <div className="conteudoQuiz">
                    <div className="containerAptidao">
                        <h1 className="rowdies bold-30">QUIZ DE APTIDÃO</h1>
                    </div>
                    <div className="primeiroQuiz">
                        <div className="quizUm">
                            <h3 className="now roboto sbold-20">Informações pessoais</h3>
                            <div className="divQuiz">
                                <input
                                    className="inputQuiz rowdies bold-30"
                                    id="placeholder-number"
                                    type="number"
                                    placeholder="Altura"
                                    value={altura}
                                    onChange={handleAlturaChange}
                                />

                                <input
                                    className="inputQuiz rowdies bold-30"
                                    id="placeholder-number"
                                    type="number"
                                    placeholder="Peso"
                                    value={peso}
                                    onChange={handlePesoChange}
                                />

                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setTatuagem)}
                                >
                                    <option disabled selected>Fez alguma tatuagem nos ultimos 6 meses ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>

                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setRelacaoSexual)}
                                >
                                    <option disabled selected>Teve algum tipo de relação sexual recentimente ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="segundoQuiz">
                        <div className="quizDois">
                            <h3 className="now roboto sbold-20">Saúde</h3>
                            <div className="comboBox">

                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setDesconforto)}
                                >
                                    <option disabled selected>Sente algum desconforto ou mal estar ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setUsoMedicamento)}
                                >
                                    <option disabled selected>Fez ou faz uso de algum medicamento ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setDst)}
                                >
                                    <option disabled selected>Tem algum tipo de DST ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <select
                                    className="quizOpition"
                                    onChange={(event) => handleOptionChange(event, setVacinaCovid)}
                                >
                                    <option disabled selected>Tomou alguma vacina contra covid recentimente ?</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divImgAptidao">
                    <img className="imgTuboAptidao" src={vetorImg[11]} alt="" />
                    <div className='divBtn'>
                        <button onClick={funcaoAoClicar} className="btn avancar bold-20" >
                            Avançar
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}