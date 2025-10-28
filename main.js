
async function getStatus() {
    const inputStatus = document.getElementById("status").value;
    const paragrafoRisposta = document.getElementById("risposta")
    const url = "https://httpbingo.org/status/" + inputStatus;
    const risposta = await fetch(url);
    console.log(risposta); 
    paragrafoRisposta.innerHTML = "Risposta dal server: " + risposta.status;
}



