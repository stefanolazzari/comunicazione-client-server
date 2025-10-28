async function prendiDati(tag) {
    //prendi il valore dai tag input
    const  lat = document.getElementById("lat").value || 45.633;
    const  lon = document.getElementById("lon").value || 9.352;
  
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true"

    //attendi risposta dal sito con await
     const risposta = await fetch(url);
     console.log(risposta);
    //dalla risposta prendi solo il json
    const datoFinale =  await risposta.json();
    console.log(datoFinale);

     console.log(risposta.url);
     
     //crea un paragrafo per visualizzare la risposta
     const elemento = document.createElement(tag);
     elemento.innerHTML = "La temperatura è di: " + datoFinale.current_weather.temperature +"C°";
     document.body.appendChild(elemento);
}