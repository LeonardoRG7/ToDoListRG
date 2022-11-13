// rutas para las tareas
const express = require("express");
const router = express.Router();
const tareaControler = require("../controllers/tareaController");

// api de tareas:  accedemos a los metodos de nuestro archvio TareaController
router.post("/", tareaControler.crearTarea);
router.get("/", tareaControler.obtenerListaTarea);
router.put("/:id", tareaControler.actualizarTarea);
router.get("/:id", tareaControler.obtenerTarea);
router.delete("/:id", tareaControler.eliminarTarea);

module.exports = router;
