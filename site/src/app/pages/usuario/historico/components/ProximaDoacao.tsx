
export const ProximaDoacao = () => {
    return (
        <>
            <div className="proximaDoacao">
                <h2 className='rowdies'>PRÓXIMA DOAÇÃO</h2>
                <div className="doacao">
                    <div className="doacaoAtual bg-vermelhoClaro">
                        <div className="item">
                            <h2 className='roboto'>Pts: 000</h2>
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
                    <div className="botaoDoacao">
                        <button className='btn bg-branco roboto'>Alterar Agendamento</button>
                        <button className='btn bg-branco roboto'>Cancelar Agendamento</button>
                    </div>
                </div>
            </div>
        </>
    );
};