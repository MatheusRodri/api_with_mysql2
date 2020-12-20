const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const TaskController = require("../controllers/TaskController")

router.post("/novoMorador",TaskController.novaMorador)
router.get("/morador",TaskController.listaMorador)
router.get("/morador/:id_morador",TaskController.listarUmMorador)
router.put("/atualizar/morador/:id",TaskController.atualizarMorador)
router.delete("/deletar/morador/:id",TaskController.removerMorador)

module.exports = router