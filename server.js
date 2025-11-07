const express = require('express');
const app = express();
const porta = 3000;


let funghi = {
  porcino: 4,
  muscaria: 0,
  chiodino: 3,
  amanitaphalloides: -5
}

let autori = {
  Adele: 3,
  Toto:5,
  frankzappa:10
}



//richieste get su http://localhost:3000/
app.get("/", (req, res) => {
  res.send("ok");
})

//richieste get su http://localhost:3000/saluto
app.get("/saluto", (req, res) => {
    res.send("Ciao");
})

app.get("/elencofunghi",(req, res) => {
    res.send(funghi);
})



//richieste get su http://localhost:3000/prof
app.get("/prof", (req, res) => {
    res.send("Ciao dal prof, a me piace la polenta col baccalà");
})






app.get("/rayan", function(richiesta,risposta){
    risposta.send("tutto ok da Rayan, a me piace la trap");
    console.log(risposta);
})



















app.listen(porta,function(){
    console.log("server in ascolto su porta: " + porta);
});

