
export const HistoricoDoacao = () => {
    return (
        <>
            <div className="doacaoAnterior">
                <h2 className='rowdies'>HISTÓRICO</h2>
                <div className="doacao">
                    <div className="doacaoAtual bg-vermelhoClaro">
                        <div className="item">
                            <h2 className='roboto'>Doação n°: 2</h2>
                            <h2 className='roboto'>Pts: 5</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Data: 00/00/00</h2>
                            <h2 className='roboto'>Hora: 00h00</h2>
                        </div>
                        <div className="item">
                            <h2 className='roboto'>Hemocentro: 9 de julho</h2>
                            <h2 className='roboto'>Local: Rua do sangue, 120</h2>
                        </div>
                    </div>
                    <div className="caixaLitros">
                        <div className="litros">
                            <h3 className='roboto'>Litros Doados</h3>
                            <h2 className='roboto'>3.5</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
