const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://Leonardo:todolist123@myapp.ya94qe7.mongodb.net/meanTodoList";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db;
