const { Router } = require("express");
const {
  infoApi,
  infoDb,
  buscadorId,
  buscadorName,
} = require("../controllers/videogames.js");
const {Videogames, geners} = require("../db");
const videogamesRouters = Router();

videogamesRouters.get("/", async (req, res) => {
  try {
    const api = await infoApi();
    const db = await infoDb();
    const response = [...api, ...db];
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

videogamesRouters.get("/name", async (req, res) => {
  try {
    const { name } = req.query;
  const response = await buscadorName(name);
  res.send(response);
  } catch (error) {
    console.log(error)
    res.status(404).send("Este nombre no corresponde a ningun juego pa")
  }
});

videogamesRouters.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    const buscar = await buscadorId(id, source);
    res.send(buscar);
  } catch (error) {
    console.log(error);
     res.status(404).send("Este id no corresponde a ningun videojuego pa")
  }
});

videogamesRouters.post("/", async (req, res) => {
  try {
    const {
      Nombre,
      Descripcion,
      Plataformas,
      Imagen,
      Fecha_de_Lamzamiento,
      Rating,
      generId,
    } = req.body;
    const newVideogames = await Videogames.create({
      Nombre,
      Descripcion,
      Plataformas,
      Imagen,
      Fecha_de_Lamzamiento,
      Rating,
      generId
    });
    await newVideogames.addGeners(generId)
    res.send(newVideogames);
  } catch (error) {
    console.log(error);
    res.status(500).send("algo salio mal pa, intentalo mas tarde")
  }
});

module.exports = {
  videogamesRouters,
};
