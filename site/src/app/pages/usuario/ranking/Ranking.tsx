import { MenuPerfil,OndaLateralEsquerda } from "../../../shared/components";
import { IPosicao, IRank, RankService } from  "../../../shared/sevice/api/tarefas/RankService";
import '../../../../html-css-template/css/telaRanking.css'
import React, { useEffect, useRef,useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {Api} from "../../../shared/sevice/api/ApiConfig"





export const Ranking = () => {
    const [rank, setRank] = useState<IRank[]>([]);
    const [colocacao, setColocacao] = useState<IPosicao | null>(null);
   
    useEffect(() => {
        RankService.getAll()
          .then((result) => {
            if (result instanceof Error) {
              alert(result.message);
            } else {
                console.log(result)
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
                console.log(result)
              setColocacao(result);
            }
          })
          .catch((error) => {
            alert(error.message || 'Erro ao buscar dados.');
          });
    }, []); // Nenhum dependência aqui, será executado uma vez na montagem do componente
    
      const Data: any[] = [];
      const color =  ["#66a0fa","#66a0fa","#66a0fa","#66a0fa","#66a0fa"]
      for(let i = 0; i < rank.length;i++){
        
        Data.push({
            id: i+1,
            nome:rank[i].nome,
            quantidade:rank[i].totalDoado,
            backgroundColor:color[i]
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
                
                Data.map(item => console.log(item.nome))
                chartInstanceRef.current = new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels:Data.map(item => item.nome),
                        
                        datasets: [
                            {
                                label: "Pontos de sangue doados",
                                data: Data.map(item => item.quantidade),
                                backgroundColor:Data.map(item => item.backgroundColor) ,
                            
                            }
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                beginAtZero: true,
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
            <MenuPerfil nome="Diego" />
            <div className="telaDireita">
                <div className="grafico">
                    <div className="myChart">
                    <canvas  className = "chat"ref={chartRef} />
                    </div>
                    <div className="pontos">
                        <div >
                        <h1 className="rowdies bold-30">Regras de Pontuação</h1>
              <br />
                <h3 className="now roboto sbold-20">Doação de sangue Nominal:<br />
                    5 Pontos</h3>

                <h3 className="now roboto sbold-20">Doação de sangue Espontânea:<br />
                    10 Pontos</h3>

                <h3 className="now roboto sbold-20">Doação de sangue Emergencial:<br />
                    20 Pontos</h3>
                        </div>
                    </div>
                </div>
                <div className="colocacao">
                <h3 className="rowdies bold-30">Sua posição no Ranking: {colocacao?.posicao} posição</h3>
                
                </div>
            </div>
            </div>

        
        </>
        
    );
}

// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "../components/PieChart";
// import BarChart from "../components/BarChart";
// import "./styles.css";

// Chart.register(CategoryScale);
 
// export default function App() {
//   const [chartData, setChartData] = useState({
//     // ...chart data
//   });
 
//   return (
//     <div className="App">
//       <PieChart chartData={chartData} />
//       <BarChart chartData={chartData} />
//     </div>
//   );