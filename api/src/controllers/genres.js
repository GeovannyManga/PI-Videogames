const axios = require("axios");
const { genres } = require("../db");

const geners = async () => {
  const api = (
    await axios.get(
      `https://api.rawg.io/api/genres?key=8832286909b344fea6fba9e9f2ba9e0d`
    )
    ).data.results;
    console.log(api.length)
  
const generosDb = await genres.findAll() 
if (!generosDb.length  || generosDb < 19) {
   const SaveGenres = await genres.bulkCreate(api)
   return SaveGenres
} else {
  return await genres.findAll()
}


};

module.exports = {
  geners,
};
