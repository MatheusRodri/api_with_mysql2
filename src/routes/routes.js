const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const TaskController = require("../controllers/TaskController")

router.post("/novoMorador",TaskController.novaMorador)

module.exports = router