const { Router } = require("express");
const { videogamesRouters } = require("../handlers/videogames.js");
const { genersRouters } = require("../handlers/genres.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/videogames", videogamesRouters);
router.use("/geners", genersRouters);

module.exports = router;
