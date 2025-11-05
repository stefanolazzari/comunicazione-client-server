const express = require('express');
const app = express();
const porta = 3000;

//richieste get su http://localhost:3000/
app.get("/", (req, res) => {
  res.send("ok");
})

//richieste get su http://localhost:3000/saluto
app.get("/saluto", (req, res) => {
    res.send("Ciao");
})

app.listen(porta,function(){
    console.log("server in ascolto su porta: " + porta);
});