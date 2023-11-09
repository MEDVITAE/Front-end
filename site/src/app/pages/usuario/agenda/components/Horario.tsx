import '../../../../../html-css-template/css/HemocentroEHorario.css'

interface IHorarioProps{
    onChange: () => void;
}

export const Horario: React.FC<IHorarioProps> = ({ onChange }) =>{

    return (
        <>
            <div className="caixaHemo">
                <div className="formularioAgenda">
                    <div className="headerHomo">
                        <p>teste</p>
                        <button onClick={onChange}>x</button>
                    </div>

                    <h3 className="hemo roboto">
                        <p>Nome: Pedro Afonso</p>
                        <p>Tipo Snaguíneo: A+</p>
                    </h3>
                </div>
            </div>
        </>
    );
}