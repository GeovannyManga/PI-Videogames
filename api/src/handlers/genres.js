const {Router} = require("express")
const genersRouters = Router()
const {geners}= require("../controllers/genres.js")

genersRouters.get("/", async (req, res)=> {
   const response = await geners()
   res.send(response)
})

module.exports ={
    genersRouters
}