const express = require("express");
const server = express();

server.use(express.json());

const courses = ["NodeJS", "JavaScript", "React Native"];

server.use((req, res) => {
  console.log("Requisição Chamada");
});

server.get("/", (req, res) => {
  return res.json(courses);
});

server.get("/:index", (req, res) => {
  const { index } = req.params;
  return res.json(courses[index]);
});

server.post("/", (req, res) => {
  const { name } = req.body;
  courses.push(name);

  return res.json(courses);
});

server.put("/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  courses[index] = name;

  return res.json(courses);
});

server.delete("/:index", (req, res) => {
  const { index } = req.params;

  courses.splice(index, 1);
  return res.json(courses);
});

server.listen(3000);
