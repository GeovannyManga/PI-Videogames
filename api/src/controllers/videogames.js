const axios = require("axios");
const { Videogames, genres } = require("../db");

const infoApi = async () => {
  let allResults = []; // arreglo temporal para almacenar los resultados de cada solicitud de API
  for (let i = 1; i <= 5; i++) { // realizamos 5 solicitudes, cada una con un parámetro "page" diferente
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=8832286909b344fea6fba9e9f2ba9e0d&page=${i}`
    );
    allResults = allResults.concat(response.data.results); // concatenamos los resultados de cada solicitud al arreglo temporal
  }
  return allResults; // devolvemos todos los resultados concatenados
};

const infoDb = async () => {
  const response = await Videogames.findAll({include: {model: genres}});
  return response;
};

const buscadorId = async (id, source) => {
  const user =
    source === "api"
      ? (
          await axios.get(
            `https://api.rawg.io/api/games/${id}?key=8832286909b344fea6fba9e9f2ba9e0d`
          )
        ).data
      : await Videogames.findOne({
          where: { ID: id },
          include: { model: genres },
        });

  return user;
};

const buscadorName = async (name) => {
  console.log(name);

  const api = await (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=8832286909b344fea6fba9e9f2ba9e0d`
    )
  ).data.results.slice(0, 15);

  const db = await Videogames.findOne({
    where: { name: name },
    include: { model: genres },
  });
  let nameUser;
  if (db) {
    nameUser = [db, ...api];
  } else {
    nameUser = api;
  }
  return nameUser;
};

module.exports = {
  infoApi,
  infoDb,
  buscadorId,
  buscadorName,
};
