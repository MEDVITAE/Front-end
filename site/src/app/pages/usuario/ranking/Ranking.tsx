import { MenuPerfil,OndaLateralEsquerda } from "../../../shared/components";
import { RankService } from  "../../../shared/sevice/api/tarefas/RankService";
import '../../../../html-css-template/css/telaRanking.css'
import React, { useEffect, useRef,useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {Api} from "../../../shared/sevice/api/ApiConfig"





export const Ranking = () => {
    const [rank, listaPessoas] = useState([]);
    useEffect(() => {
       listar();
     }, []);
     function listar() {
        RankService.getAll
        ()
          .then((respostaObtida) => {
            console.log(respostaObtida);
         
          })
          .catch((erroOcorrido) => {
            console.log(erroOcorrido);
          });
      }
    const Data = [
        {
            id: 1,
            ano: 2016,
            userGain: 80000,
            userLost: 823
        }, {
            id: 2,
            ano: 2017,
            userGain: 45677,
            userLost: 345
        },
        {
            id: 3, ano: 2018,
            userGain: 78888,
            userLost: 555
        }
    ];

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
                        labels: Data.map(item => item.ano),
                        datasets: [
                            {
                                label: "Litros de sangue doados",
                                data: Data.map(item => item.userGain),
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
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
    }, []);
    
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
                        <div>
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
                <h3 className="rowdies bold-30">Sua posição no Ranking: 10° posição</h3>
                
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