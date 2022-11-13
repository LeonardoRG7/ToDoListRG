const express = require("express");
const db = require("./config/db");
const cors = require("cors");
// Creamos el servidor
const app = express();

app.use(cors());

// Permitimos datos JSON desde postman
app.use(express.json());
app.use("/api/tareas", require("./routes/tarea"));

const port = process.env.PORT || 4000;

app.get("/", (req,res) => res.send("Hola desde la api"));

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
  db();
});
