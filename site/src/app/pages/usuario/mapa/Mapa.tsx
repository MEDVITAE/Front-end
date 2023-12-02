import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

import '../../../../html-css-template/css/maps.css'

import { MenuPerfilUsuario, OndaLateralEsquerda } from "../../../shared/components";
import { EnderecoService, IEndereco, ICoords } from "../../../shared/sevice/api/tarefas/EnderecoService";

export const Mapa = () => {
  const navigate = useNavigate();
 
  const handleClick = (id: number | undefined) => {
    if( sessionStorage.getItem("idHospital")){
      sessionStorage.removeItem("idHospital");
    }
    
    if(id){
      sessionStorage.setItem("idHospital",id.toString());
    }
    // Redirecionar o usuário para outra rota
    navigate(`/perfil-usuario/mapa/detalhes`);
  };

  // const [position, setPosition] = useState({ lat: -23.5599892, lng: -46.6664454 });
  // const [dataFetched, setDataFetched] = useState(false);

  const [position, setPosition] = useState({});
  const [lista, setLista] = useState<IEndereco[] | null>(null);
  const [coordenadas, setCoordenadas] = useState([{}]);
  
  useEffect(() => {
    EnderecoService.getAll()
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setLista(result);
        }
      })
      .catch((error) => {
        alert(error.message || 'Erro ao buscar dados.');
      });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        const { latitude, longitude } = location.coords;
        setPosition({ lat: latitude, lng: longitude });

        if (lista !== null && lista.length > 0) {
          const buscarCoordenadas = async () => {
            let newCoordenadas: ICoords[] = [];

            for (let i = 0; i < lista.length; i++) {
              try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${lista[i].cep.replace("-", "")}&key=AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8`, {
                  method: "POST",
                  mode: "cors"
                });

                const data = await response.json();
                const lat = data.results[0].geometry.location.lat;
                const lng = data.results[0].geometry.location.lng;
           

                newCoordenadas.push({ lat, lng });
              } catch (error) {
                console.log(error);
              }
            }

            setCoordenadas(newCoordenadas);
          };
          buscarCoordenadas();
        }
      }, (error) => {
        console.error("Erro ao obter a localização:", error);
      });
    } else {
      console.error("Geolocalização não é suportada no seu navegador.");
    }
  }, [lista]);
  




  return (
    <>
      <OndaLateralEsquerda />
      <div className="conteudo1">
        <MenuPerfilUsuario nome="Diego" />
        <div className="mapaMundi">
          <div className="rowdies topo">
            <div className="titulo">
              <h1>Ver mapa</h1>
            </div>
          </div>
          <div className="mapa">
            <div className='map'>
              <APIProvider apiKey={'AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8'}>
                <Map center={position} zoom={14} >
                  {coordenadas?.map((vetor, index) => (
                    <>
                    <Marker key={index} position={vetor}  onClick={() => handleClick(lista?.[index].fkHospital)} />
                    </>
                  ))}
              
                </Map>
              </APIProvider>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
};