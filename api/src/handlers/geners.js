const {Router} = require("express")
const genersRouters = Router()
const {genersNames}= require("../controllers/geners.js")

genersRouters.get("/", async (req, res)=> {
   const response = await genersNames()
   res.send(response)
})

module.exports ={
    genersRouters
}