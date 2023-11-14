import { SetStateAction, useRef, useState } from 'react';
import '../../../../html-css-template/css/telaAptidao.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { vetorIcon, vetorImg } from '../../../shared/components/imagens';
import { useNavigate } from 'react-router-dom';


export const Quiz = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [tatuagem, setTatuagem] = useState('');
    const [relacaoSexual, setRelacaoSexual] = useState('');
    const [desconforto, setDesconforto] = useState('');
    const [usoMedicamento, setUsoMedicamento] = useState('');
    const [dst, setDst] = useState('');
    const [vacinaCovid, setVacinaCovid] = useState('');


    //função handleAlturaChange chamada quando o valor do campo altura e peso é alterado.
    const handleAlturaChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAltura(event.target.value);
    };

   //função handlePesoChange chamada quando o valor do campo peso é alterado.
    const handlePesoChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPeso(event.target.value);
    };

   //função handleOptionChange chamada quando o valor das Options é alterado.
    const handleOptionChange = (event: { target: { value: string; }; }, setState: (arg0: string) => void) => {
        setState(event.target.value);
    };

    const showValidationErrorModal = (message: string) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
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

    const validateAltura = () => {
        if (parseFloat(altura) <= 0) {
            showValidationErrorModal(
                "Altura inválida. Por favor, insira uma altura válida.");
            return false;
        }
        return true;
    };

    const validatePeso = () => {
        if (parseFloat(peso) < 50) {
            showValidationErrorModal(
                "Para doar sangue, é necessário ter mais de 50kg.");
            return false;
        }
        return true;
    };

    const validateTatuagem = () => {
        if (tatuagem === 'sim') {
            showValidationErrorModal(
                "Você precisa esperar pelo menos 12 mês após a última tatuagem para doar.");
            return false;
        }
        return true;
    };

    const validateRelacaoSexual = () => {
        if (relacaoSexual === 'sim') {
            showValidationErrorModal(
                "Você precisa esperar pelo menos 7 dias após a última relação sexual para doar.");
            return false;
        }
        return true;
    };

    const validateDesconforto = () => {
        if (desconforto === 'sim') {
            showValidationErrorModal(
                "Consulte um médico antes de doar.");
            return false;
        }
        return true;
    };

    const validateUsoMedicamento = () => {
        if (usoMedicamento === 'sim') {
            showValidationErrorModal(
                "Aguarde sete dias após o fim do tratamento para doar.");
            return false;
        }
        return true;
    };

    const validateDst = () => {
        if (dst === 'sim') {
            showValidationErrorModal(
                "Esperar 6 meses após ter um caso de DST para realizar a doação.");
            return false;
        }
        return true;
    };

    const validateVacinaCovid = () => {
        if (vacinaCovid === 'sim') {
            showValidationErrorModal(
                "Tempo de espera para doar: Coronavac após dois dias. AstraZeneca, Pfizer-BioNTech e Janssen após sete dias.");
            return false;
        }
        return true;
    };

    const validateForm = () => {

        // Verificar se algum campo está vazio
        if (
            altura === '' ||
            peso === '' ||
            tatuagem === '' ||
            relacaoSexual === '' ||
            desconforto === '' ||
            usoMedicamento === '' ||
            dst === '' ||
            vacinaCovid === ''
        ) {
            showValidationErrorModal("Por favor, preencha todos os campos do formulário.");
            return false;
        }

        // Chamando todas as funções de validação
        return (
            validateAltura() &&
            validatePeso() &&
            validateTatuagem() &&
            validateRelacaoSexual() &&
            validateDesconforto() &&
            validateUsoMedicamento() &&
            validateDst() &&
            validateVacinaCovid() &&
            true
        );
    };

    const navigate = useNavigate();
    const handleAvancarClick = async () => {
        // Validar todos os campos individualmente
        // if (
        //     !validateAltura() ||
        //     !validatePeso() ||
        //     !validateTatuagem() ||
        //     !validateRelacaoSexual() ||
        //     !validateDesconforto() ||
        //     !validateUsoMedicamento() ||
        //     !validateDst() ||
        //     !validateVacinaCovid()) {
        //     return; // Se alguma validação falhar, não avança para a próxima etapa
        // }

        // Para o caso de todos os campos estarem validados
        if (validateForm()) {
            // Todos os campos foram preenchidos e o usuário está apto
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2100,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "success",
                title: "Você está apto para doar!"
            });
            await new Promise(resolve => setTimeout(resolve, 2000));
            navigate("/perfil-usuario");
        } 
    };
    // ------------------------------------------


    // ------------------------------------------
    //Tela
    // ------------------------------------------
    return (
        <>
            <OndaLateralEsquerda />
            <div className="flexContainer">
                <MenuPerfilUsuario nome="Diego" />
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
                        <button onClick={handleAvancarClick} className="btn cadastrar bold-20" >
                            Avançar
                            <img src={vetorIcon[0]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}



