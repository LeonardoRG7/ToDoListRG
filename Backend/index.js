const express = require("express");
const db = require("./config/db");
const cors = require("cors");
// Creamos el servidor
const app = express();

app.use(cors());

// Permitimos datos JSON desde postman
app.use(express.json());
app.use("/api/tareas", require("./routes/tarea"));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
  db();
});
