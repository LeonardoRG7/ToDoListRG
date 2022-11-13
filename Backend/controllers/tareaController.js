const Tarea = require("../models/Tarea");

// CREAR
exports.crearTarea = async (req, res) => {
  try {
    let tarea;
    //creamos nuestra tarea
    tarea = new Tarea(req.body);
    //almacenamos nuestro producto
    await tarea.save();
    res.send(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// OBTENER LISTA
exports.obtenerListaTarea = async (req, res) => {
  try {
    /** con el metodo find hacemos la busqueda desde nuestro archvio Tarea con un tiempo de respuesta
     * que se hará a la BD de toda la lista de nuestras tareas*/
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// ACTUALIZAR
exports.actualizarTarea = async (req, res) => {
  try {
    const { titulo, autor, descripcion } = req.body;
    // hacemos peticion a la base de datos para obtener una tarea por medio de un id
    let tareas = await Tarea.findById(req.params.id);

    if (!tareas) {
      res.status(400).json({ mensaje: "No existe la tarea" });
    }

    tareas.titulo = titulo;
    tareas.autor = autor;
    tareas.descripcion = descripcion;

    //Actualizamos nuestra tarea con el metodo findOneAndUpdate por medio de id
    tareas = await Tarea.findOneAndUpdate({ _id: req.params.id }, tareas, {
      new: true,
    });
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// OBTENER POR ID
exports.obtenerTarea = async (req, res) => {
  try {
    // hacemos peticion a la base de datos para obtener una tarea por medio de un id
    let tareas = await Tarea.findById(req.params.id);

    if (!tareas) {
      res.status(400).json({ mensaje: "No existe la tarea" });
    }

    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// ELIMINAR
exports.eliminarTarea = async (req, res) => {
  try {
    // hacemos peticion a la base de datos para obtener una tarea por medio de un id
    let tareas = await Tarea.findById(req.params.id);

    if (!tareas) {
      res.status(400).json({ mensaje: "No existe la tarea" });
    }

    await Tarea.findByIdAndRemove({ _id: req.params.id });
    res.json({ mensaje: "Tarea eliminada con exito!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
