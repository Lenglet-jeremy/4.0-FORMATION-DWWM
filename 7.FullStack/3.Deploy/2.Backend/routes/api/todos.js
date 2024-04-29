const router = require("express").Router();
const mongoose = require("mongoose");
const todoSchema = require("../../models/todo.schema");
const Todos = mongoose.model("todos", todoSchema);

// route qui récupère toutes les todos
router.get("/", (req, res) => {
  Todos.find()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.error(err));
});

// route qui ajoute une todo
router.post("/addTodo", (req, res) => {
  const body = req.body;
  // console.log(req.body);
  const newTodo = new Todos(body);
  newTodo
    .save()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.log(err));
});

// route qui supprime une todo
router.delete("/deleteTodo", (req, res) => {});

// route qui modifie une todo
router.patch("/updateTodo", (req, res) => {});

module.exports = router;
