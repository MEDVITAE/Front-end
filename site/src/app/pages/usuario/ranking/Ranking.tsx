import { useEffect, useRef, useState } from "react";

import '../../../../html-css-template/css/telaRanking.css'

import Chart from "chart.js/auto";

import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { IPosicao, IRank, RankService } from "../../../shared/sevice/api/tarefas/RankService";

export const Ranking = () => {
  const [rank, setRank] = useState<IRank[]>([]);
  const [colocacao, setColocacao] = useState<IPosicao | null>(null);

  useEffect(() => {
    RankService.getAll()
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRank(result);
        }
      })
      .catch((error) => {
        alert(error.message || 'Erro ao buscar dados.');
      });

    RankService.getById()
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setColocacao(result);
        }
      })
      .catch((error) => {
        alert(error.message || 'Erro ao buscar dados.');
      });
  }, []); // Nenhum dependência aqui, será executado uma vez na montagem do componente

  const Data: any[] = [];
  for (let i = 0; i < rank.length; i++) {
    let color;
    const nomeSession = sessionStorage.getItem("userName");

    //Troca de cor nas barras
    if(rank[i].nome === nomeSession ? nomeSession : ''){
      color = "#0D6986";
    } else {
      color = "#FF6666";
    }

    Data.push({
      id: i + 1,
      nome: rank[i].nome,
      quantidade: rank[i].totalDoado,
      backgroundColor: color
    });
  }
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        // Destrua o gráfico existente antes de criar um novo
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {

        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: Data.map(item => item.nome),
            datasets: [
              {
                label: "Pontos de outros Doadores",
                data: Data.map(item => item.quantidade),
                backgroundColor: Data.map(item => item.backgroundColor),
              }
            ],
          },
          options: {
            scales: {
              x: {
                beginAtZero: false,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [Data]);

  return (
    <>
      <OndaLateralEsquerda />
      <div className="flexContainer">
        <MenuPerfilUsuario nome="Diego" />
        <div className="telaDireita">
          
          <header className="colocacao">
            <h1 className="rowdies">Sua posição no Ranking: {colocacao?.posicao} posição</h1>
          </header>

          <div className="grafico">

            <div className="myChart">
              <canvas className="chat" ref={chartRef} />
            </div>

            <div className="pontos bg-branco">
              <h1 className="rowdies bold-24">Regras de Pontuação</h1>
              <h3 className="roboto regular-16">Doação de sangue Nominal</h3>
              <h3 className="roboto sbold-16">5 Pontos</h3>
              <h3 className="roboto regular-16">Doação de sangue Espontânea</h3>
              <h3 className="roboto sbold-16">10 Pontos</h3>
              <h3 className="roboto regular-16">Doação de sangue Emergencial</h3>
              <h3 className="roboto sbold-16">20 Pontos</h3>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}