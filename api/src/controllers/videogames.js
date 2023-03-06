const axios = require("axios");
const { Videogames, geners } = require("../db");

const infoApi = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=8832286909b344fea6fba9e9f2ba9e0d`
  );
  return response.data.results;
};

const infoDb = async () => {
  const response = await Videogames.findAll();
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
          include: { model: geners },
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
    where: { Nombre: name },
    include: { model: geners },
  });
  let nameUser;
  if (db) {
   nameUser = [db, ...api];
  } else {
    nameUser = api;
  }
  return nameUser
};

module.exports = {
  infoApi,
  infoDb,
  buscadorId,
  buscadorName,
};
