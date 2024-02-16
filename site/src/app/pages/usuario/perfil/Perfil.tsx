import Swal from 'sweetalert2'

import { useEffect, useState } from 'react';

import { Anexo } from '../../../shared/contexts';

import { 
    TarefasService, 
    IDetalheUser, 
    IUserId, 
    IDetalheUserUpdate, 
    IUserCaracteristicasUpdate, 
    IUserEnderecoUpdate 
} from '../../../shared/sevice/api/tarefas/TarefasService';

import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { vetorImg, vetorTipoSangue } from '../../../shared/components/imagens';

import { ApiException } from '../../../shared/sevice/api/ApiException';

export const Perfil = () => {
    useEffect(() => {
        Anexo();

    }, []);

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [sexo, setSexo] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [email, setEmail] = useState('');
    const [numeroDoacao, setNumeroDoacao] = useState('0');

    const [imgCheck, setImgCheck] = useState(16);
    const [imgTipoSangue, setImgTipoSangue] = useState(8);

    const Id: IUserId = {
        Id: sessionStorage.getItem('id') ?? ''
    }

    const detalhesUser: IDetalheUserUpdate = {
        email: email,
        cpf: cpf,
        role: sessionStorage.getItem('userRole'),
        nome: nomeCompleto,
    }

    const caracteristicasUser: IUserCaracteristicasUpdate = {
        peso: peso,
        altura: altura,
        sexo: sexo,
        nascimento: nascimento.replace(/\//g, '-').split('-').reverse().join('-')
    }

    const enderecoUser: IUserEnderecoUpdate = {
        cep: cep,
        numero: numeroCasa
    }

    const iniciarDetalhes = async (): Promise<IDetalheUser | ApiException> => {
        return await TarefasService.getDetalhesUsuario(Id.Id);
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const detalhesUser: IDetalheUser | ApiException = await iniciarDetalhes();
                if ('message' in detalhesUser) {
                    console.log("Erro ao obter detalhes do usuário:", detalhesUser.message);
                } else {
                    setNomeCompleto(detalhesUser.nome)
                    setCpf(detalhesUser.cpf);
                    setCep(detalhesUser.cep);
                    setNumeroCasa(detalhesUser.numeroCasa);
                    setSexo(detalhesUser.sexo);

                    setNascimento(detalhesUser.nascimento.replace(/-/g, '/'));

                    setPeso(detalhesUser.peso);
                    setAltura(detalhesUser.altura);
                    setEmail(detalhesUser.email);
                    setNumeroDoacao(detalhesUser.numero);
                    
                    switch (detalhesUser.tipo) {
                        case 'A+':
                            setImgTipoSangue(0);
                            break;
                        case 'A-':
                            setImgTipoSangue(1);
                            break;
                        case 'B+':
                            setImgTipoSangue(2);
                            break;
                        case 'B-':
                            setImgTipoSangue(3);
                            break;
                        case 'AB+':
                            setImgTipoSangue(4);
                            break;
                        case 'AB-':
                            setImgTipoSangue(5);
                            break;
                        case 'O+':
                            setImgTipoSangue(6);
                            break;
                        case 'O-':
                            setImgTipoSangue(7);
                            break;
                        default:
                            setImgTipoSangue(8)
                            break;
                    }
                    
                    if (detalhesUser.apto) {
                        setImgCheck(15);
                    } else {
                        setImgCheck(16);
                    }
                    // Aqui você pode definir outros states com base nos detalhes do usuário, se necessário
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do usuário:', error);
            }
        };

        fetchUserDetails();
    }, []);


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

    const validateCampos = async () => {
        // Verificar se algum campo está vazio
        if (
            nomeCompleto === '' ||
            cep === '' ||
            cpf === '' ||
            numeroCasa === '' ||
            sexo === '' ||
            nascimento === '' ||
            peso === '' ||
            altura === '' ||
            email === ''

        ) {
            showValidationErrorModal("Por favor, preencha todos os campos.");
            return false;
        }

        try {
            await TarefasService.postDetalhesUsuario(Id.Id, detalhesUser, caracteristicasUser, enderecoUser)

            return (
                validateNomeCompleto() &&
                validateCep() &&
                validateCpf() &&
                validateNumeroCasa() &&
                validateSexo() &&
                validateNascimento() &&
                validatePeso() &&
                validateAltura() &&
                validateEmail() &&
                true
            )
        } catch (error: any) {
            showValidationErrorModal("Ocorreu um erro inesperado. Tente realizar o login novamente para editar seus dados.");
        }
    };

    const editarClick = async () => {
        // Para o caso de todos os campos estarem validados
        if (await validateCampos()) {
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
                title: "Suas informações foram salvas com sucesso!"
            });
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    };


    // Função genérica para lidar com mudanças nos campos
    const handleFieldChange = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        switch (fieldName) {
            case 'nomeCompleto':
                setNomeCompleto(value);
                break;
            case 'cpf':
                setCpf(value);
                break;
            case 'cep':
                setCep(value);
                break;
            case 'numeroCasa':
                setNumeroCasa(value);
                break;
            case 'sexo':
                setSexo(value);
                break;
            case 'nascimento':
                setNascimento(value);
                break;
            case 'peso':
                setPeso(value);
                break;
            case 'altura':
                setAltura(value);
                break;
            case 'email':
                setEmail(value);
                break;
            // Adicione mais casos conforme necessário para outros campos
            default:
                break;
        }
    };

    // Função genérica para lidar com eventos de blur (foco perdido) nos campos
    const handleBlur = (fieldName: string) => () => {
        switch (fieldName) {
            case 'nomeCompleto':
                validateNomeCompleto();
                break;
            case 'cpf':
                validateCpf();
                break;
            case 'cep':
                validateCep();
                break;
            case 'numeroCasa':
                validateNumeroCasa();
                break;
            case 'sexo':
                validateSexo();
                break;
            case 'nascimento':
                validateNascimento();
                break;
            case 'peso':
                validatePeso();
                break;
            case 'altura':
                validateAltura();
                break;
            case 'email':
                validateEmail();
                break;
            default:
                break;
        }
    };

    function validateNomeCompleto(): boolean {
        // Validação simples: verifica se o campo não está vazio
        if (!(nomeCompleto.trim().length > 1)) {
            showValidationErrorModal(
                "Seu nome precisa ter mais de uma letra");
            return false;
        }

        return true;
    }

    function validateCpf(): boolean {
        // Validação simples: verifica se o CPF possui 11 dígitos
        if (!(cpf.trim().length >= 11)) {
            showValidationErrorModal(
                "Seu CPF precisa ter no minímo 11 dígitos");
            return false;
        }

        return true;
    }

    function validateCep(): boolean {
        // Validação simples: verifica se o CEP possui 8 dígitos
        if (!(cep.trim().length >= 8)) {
            showValidationErrorModal(
                "Seu CEP precisa ter no mínimo 8 dígitos");
            return false;
        }

        return true;
    }


    function validateNumeroCasa(): boolean {
        // Validação simples: verifica se o campo não está vazio
        const regex = /^[0-9]+$/;

        // Verifica se o número contém apenas dígitos
        if (!(regex.test(numeroCasa))) {
            showValidationErrorModal(
                "O número da sua residência precisa ter no mínimo 1 número");
            return false;
        }

        return true;
    }

    function validateSexo(): boolean {
        // Validação simples: verifica se o campo é 'M' ou 'F'
        if (!(sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'feminino')) {
            showValidationErrorModal(
                "Seu sexo biológico precisar ser ou 'M' ou 'F'");
            return false;
        }

        return true;
    }

    function validateNascimento(): boolean {
        // Validação simples: verifica se a data de nascimento está no formato adequado
        const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!(regex.test(nascimento))) {
            showValidationErrorModal(
                "Sua data de nascimento precisa estar no formarto dd/mm/aaaa");
            return false;
        }

        return true;
    }

    function validatePeso(): boolean {
        // Validação simples: verifica se o campo é um número positivo
        const numericPeso = parseFloat(peso);

        if (!(!isNaN(numericPeso) && numericPeso > 0)) {
            showValidationErrorModal(
                "Seu peso precisa ser um número positivo");
            return false;
        }

        return true;
    }

    function validateAltura(): boolean {
        // Validação simples: verifica se o campo é um número positivo
        const numericAltura = parseFloat(altura);

        if (!(!isNaN(numericAltura) && numericAltura > 0)) {
            showValidationErrorModal(
                "Sua altura precisa ser um número positivo");
            return false;
        }

        return true;
    }

    function validateEmail(): boolean {
        // Validação simples: verifica se o campo é um email válido
        if (!(/\S+@\S+\.\S+/.test(email))) {
            showValidationErrorModal(
                "Seu e-mail deve conter pelo menos um caracter antes e depois do @ e um 'ponto' depois do @");
            return false;
        }

        return true;
    }


    return (
        <>
            <OndaLateralEsquerda />
            <main className='mainPerfil'>
                <MenuPerfilUsuario nome="Diego" />
                <div className="divPerfil">
                    <div className="statusBox_1">
                        <h2 className="rowdies mr-bt">STATUS</h2>
                        <div className="statusBoxItem">
                            <div className="boxItem">
                                <h3 className="roboto sbold-24">Disponível</h3>
                                <div className="box">
                                    
                                    <img className='box_icon' src={vetorImg[imgCheck] ?? 16} alt="" />
                                </div>
                            </div>
                            <div className="boxItem">
                                <h3 className="roboto sbold-24">Doações Feitas</h3>
                                <div className="box rowdies bold-64">
                                    {numeroDoacao}
                                </div>
                            </div>
                            <div className="boxItem">
                                <h3 className="roboto sbold-24">Tipo Sanguíneo</h3>
                                <div className="box rowdies bold-64">
                                    <img className='box_icon' src={vetorTipoSangue[imgTipoSangue]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="statusBox_2">
                        <h2 className="rowdies mr-bt">DADOS DO USUÁRIO</h2>
                        <div className="statusBoxRow">
                            <div className="statusBoxItemColmun">
                                <div className='roboto sbold-16'>Nome Completo:</div>
                                <input className="campoUsuario roboto bold-30" value={nomeCompleto} type="text" placeholder='Nome Completo' onChange={handleFieldChange('nomeCompleto')} onBlur={handleBlur('nomeCompleto')} />
                                <div className='roboto sbold-16'>CPF:</div>
                                <input className="campoUsuario roboto bold-30" value={cpf} type="text" placeholder='CPF' onChange={handleFieldChange('cpf')} onBlur={handleBlur('cpf')} />
                                <div className='roboto sbold-16'>CEP:</div>
                                <input className="campoUsuario roboto bold-30" value={cep} type="text" placeholder='CEP' onChange={handleFieldChange('cep')} onBlur={handleBlur('cep')} />
                                <div className='roboto sbold-16'>Número da casa:</div>
                                <input className="campoUsuario roboto bold-30" value={numeroCasa} type="text" placeholder='Número' onChange={handleFieldChange('numeroCasa')} onBlur={handleBlur('numeroCasa')} />
                            </div>
                            <div className="statusBoxItemColmun">
                                <div className='roboto sbold-16'>Sexo Biológico:</div>
                                <input className="campoUsuario roboto bold-30" value={sexo} type="text" placeholder='Feminino ou Masculino' onChange={handleFieldChange('sexo')} onBlur={handleBlur('sexo')} />
                                <div className='roboto sbold-16'>Data de Nascimento:</div>
                                <input className="campoUsuario roboto bold-30" value={nascimento} type="text" placeholder='Data de Nascimento (dd/mm/aaaa)' onChange={handleFieldChange('nascimento')} onBlur={handleBlur('nascimento')} />
                                <div className='roboto sbold-16'>Peso:</div>
                                <input className="campoUsuario roboto bold-30" value={peso} type="double" placeholder='Peso' onChange={handleFieldChange('peso')} onBlur={handleBlur('peso')} />
                                <div className='roboto sbold-16'>Altura:</div>
                                <input className="campoUsuario roboto bold-30" value={altura} type="double" placeholder='Altura' onChange={handleFieldChange('altura')} onBlur={handleBlur('altura')} />
                            </div>
                            <div className="statusBoxItemColmun">
                                <div className='roboto sbold-16'>Email:</div>
                                <input className="campoUsuario roboto bold-30" value={email} type="email" placeholder='Email' onChange={handleFieldChange('email')} onBlur={handleBlur('email')} />
                                <div className='roboto sbold-16'>Documento com foto:</div>
                                <div className='div_picture'>
                                    <label className="picture" htmlFor="picture__inputPerfil" tabIndex={0}>
                                        <span className="picture__image"></span>
                                    </label>
                                </div>

                                <input type="file" name="picture__inputPerfil" id="picture__inputPerfil" />
                            </div>
                        </div>
                        <div onClick={editarClick} className="btnBoxItem">
                            <button className="btn bg-vermelhoClaro bold-30">Editar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}