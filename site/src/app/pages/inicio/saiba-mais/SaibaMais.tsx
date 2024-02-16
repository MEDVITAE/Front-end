import { vetorIcon, vetorImg } from '../../../shared/components/imagens';

export const SaibaMais = () => {
    return (
        <>
            <div className="bg-imgOndaLogoUsuario">
                <img className="imgOndaDentro" src={vetorImg[9]} alt="" />
                <img className="logoPerfil" src={vetorImg[3]} alt="" />
                <a className="home bold-24" href="/pagina-inicial">Home</a>
                <img className="tuboMais" src={vetorImg[11]} alt="" />
            </div>
            <div className="doar">
                <h1 className="rowdies">REGRAS GERAIS PARA DOAÇÃO DE SANGUE</h1>
                <div className="conteudoDoar">
                    <div className="conteudoRegras">
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Idade: entre 16 e 69 anos (Menores de idade ir acompanhado
                            por Responsável);
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Peso: no mínimo 50 kg;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Sono: ter dormido pelo menos 6 horas na noite anterior;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Alimentação: estar alimentado e evitar alimentos gordurosos antes da doação;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Documento: apresentar documento de identidade original com foto atual;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Jejum: a pessoa não deve estar em jejum nas horas que antecedem a doação;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Bebida alcoólica: não ter ingerido bebida alcoólica 12 horas antes da doação;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Fumo: não ter fumado nas 2 horas anteriores à doação;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Saúde: estar saudável e não ter doenças transmissíveis pelo sangue;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas);
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Resfriado: aguardar 7 dias após desaparecimento dos sintomas;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            90 dias após parto normal e 180 dias após cesariana;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Em caso de Tatuagem ou maquiagem definitiva, aguardar por
                            12 meses antes de realizar a doação;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Situações nas quais há maior risco de adquirir doenças sexualmente transmissíveis: aguardar 6 meses.
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Qualquer procedimento endoscópico (endoscopia digestiva alta,
                            colonoscopia, rinoscopia, etc.): aguardar 6 meses;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Vacina contra gripe: por 48 horas;
                        </li>
                        <li className="sbold-20 roboto">
                            <img src={vetorIcon[1]} alt="" />
                            Vacina contra Coronarivus: Aguardar 48 horas após cada dose
                            (Coronavac e Covaxin).
                            7 dias após cada dose (AstraZeneca, Pfizer, Janssen-Cilag e Moderna).
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
}