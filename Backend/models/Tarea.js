const mongoose = require("mongoose");

const TareaSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("Tarea", TareaSchema);
