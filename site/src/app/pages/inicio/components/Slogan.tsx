import  Imagem  from '../../../../html-css-template/assets/pessoas.png';

export const Slogan = () =>{
    return(
        <>
        <div className="slogan">
                <img className="imgPessoas" src={Imagem} alt="" />
                <div className="textoSlogan">
                    <div>
                        <h1 className="rowdies regular-64">Doe sangue</h1>
                        <h1 className="rowdies regular-64">Doe vida.</h1>
                        <p className="roboto regular-24">Transfusões de sangue fazem a</p>
                        <p className="roboto regular-24">diferença entre a vida e a morte</p>
                        <p className="roboto regular-24">para centenas de pacientes</p>
                        <p className="roboto regular-24">todos os dias.</p>
                    </div>
                    <button className="btn bg-vermelhoClaro regular-16">
                        Quero ser um doador
                        <img src="../assets/BackArrow.png" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}