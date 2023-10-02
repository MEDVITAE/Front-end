
let map;
let vetores =  [{lat: -23.537748, lng: -46.461309},{ lat :-23.536509, lng: -46.461819 },{ lat: -23.52900, lng: -46.402500 },{ lat: -23.529800, lng: -46.402600 }]
let longitude = null;
let latitude = null
function recuperaEndereco(){
    const cep = document.getElementById("cep").value;
    
      fetch(`https://viacep.com.br/ws/${cep}/json/`,{
        method: "GET",
        mode: "cors"
      }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        console.log(resposta)
            resposta.json().then(json => {
              
               recuperaLagLog(json.logradouro)
            });
    }).catch(function (erro) {
        console.log(erro);
    })

  }
  function recuperaLagLog(endereco){
console.log(endereco)

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8`,{
        method: "POST",
        mode: "cors"
      }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        console.log(resposta)
            resposta.json().then(json => {
              console.log(json)
            latitude = json.results[0].geometry.location.lat;
            longitude = json.results[0].geometry.location.lng;
            initMap()
            return json;
            });
    }).catch(function (erro) {
        console.log(erro);
    })

  }


async function initMap() {
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
  });
  

  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  if(latitude  == null || longitude == null){
    map = new Map(document.getElementById("map"), {
   
      center: {lat:-23.537453, lng: -46.462382},
      zoom: 20,
    });
  }else{
  
    console.log(latitude);
    map = new Map(document.getElementById("map"), {
      
      center: {lat:latitude, lng: longitude},
      zoom: 20,
    });
  }


  for(let i = 0; i < vetores.length;i++){
    let marcador = new google.maps.Marker({
        position:  vetores[i],
        map,
        title: "Hello World!"
        
      });
      marcador.addListener('click', function() {
        // Redirecione para o link desejado quando o marcador for clicado
        window.location.href = 'https://www.youtube.com/results?search_query=usando+maps+tomtom';
      });
      marcador.setMap(map);
}


  console.log(map)
}



    // https://maps.googleapis.com/maps/api/geocode/json?address=08441+520&key=AIzaSyB-b9znqlJ4a9CNUI-QoaqpXczDscalBc8