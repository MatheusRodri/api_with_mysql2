const database = require("../database/connection")

class TaskController{
    novaMorador(request,response){
        const{nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro} = request.body

        console.log(nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro)

        database.insert({nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro}).table("tb_morador").then(data=>{
            console.log(data)
            response.json({message:"Certo"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController()