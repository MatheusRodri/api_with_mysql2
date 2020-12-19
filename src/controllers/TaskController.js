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
    listaMorador(request,response){
        database.select("*").table("tb_morador").then(morador =>{
            console.log(morador)
            response.json(morador)
    }).catch(error =>{
        console.log(error)
    })
    }
    listarUmMorador(request,response){
        const id_morador = request.params
        console.log(id_morador.id_morador)

        database.select('*').table("tb_morador").where({id_morador:id_morador.id_morador}).then(morador=>{
            response.json(morador)
            }).catch(error =>{
                console.log(error)
            })
    }
}

module.exports = new TaskController()