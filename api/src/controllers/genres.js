const axios = require("axios");
const { genres } = require("../db");

const finder = async (name) => {
  const buscar = await genres.findAll(name);
  return buscar;
};

const genersNames = async () => {
  const api = (
    await axios.get(
      `https://api.rawg.io/api/genres?key=8832286909b344fea6fba9e9f2ba9e0d`
    )
  ).data.results;
  for (let i = 0; i < api.length; i++) {
    const gener = api[i];

    await genres.create({
      name: gener.name,
    });
  }
  const buscador = finder();
  return buscador;
};

module.exports = {
  genersNames,
};
