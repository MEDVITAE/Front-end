export const Mapa = () =>{
    return(
        <>
        <div className="menu">
        <h1 className="rowdies bold-30">Olá,Pedro</h1>
        <div className="menuItens">
            <a href="" className="now roboto sbold-20">Perfil</a>
            <a href="" className="item roboto sbold-20">Ver mapa</a>
            <a href="" className="item roboto sbold-20">Quiz de Aptidão</a>
            <a href="" className="item roboto sbold-20">Histórico de Doações</a>
            <a href="" className="item roboto sbold-20">Agendar Doação</a>
            <a href="" className="item roboto sbold-20">Ranking</a>
        </div>
        <button className="btn bg-vermelhoClaro">Sair</button>
    </div>
    <div className="conteudo">
        <div className="rowdies topo">
            <div className="titulo">
                <h1>Ver mapa</h1>
            </div>

            <div className="selecionaCep roboto">
                Informe seu CEP:
                <input id="cep" placeholder="08332-394" />
                <span //onclick="recuperaEndereco()">
                ></span>
                <button className="btn">Pesquisar</button>
            </div>
            <div className="logo">
                <img src="../assets/LogoVitai.png" alt="" />
            </div>
        </div>
        <div className="ondas">
            <div className="waves">
                <img src="../assets/ONDA - MAPA.svg" alt="" />
            </div>
        </div>
        <div className="mapa">
            <div className="map" id="map"></div>
        </div>
    </div>
        </>
    );
}