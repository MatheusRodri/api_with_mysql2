const database = require("../database/connection")

class TaskController{
    novaMorador(request,response){
        const{nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro} = request.body

        database.insert({nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro}).table("tb_morador").then(data=>{
            response.json({message:"Certo"})
        }).catch(error=>{
            console.log(error)
        })
    }
    listaMorador(request,response){
        database.select("*").table("tb_morador").then(morador =>{
            response.json(morador)
    }).catch(error =>{
        console.log(error)
    })
    }
    listarUmMorador(request,response){
        const id_morador = request.params

        database.select('*').table("tb_morador").where({id_morador:id_morador.id_morador}).then(morador=>{
            response.json(morador)
            }).catch(error =>{
                console.log(error)
            })
    }
    atualizarMorador(request,response){
        const id_morador = request.params
        const {nm_morador,apto_morador,bl_morador,email,senha,morador,sindico,porteiro} = request.body

        database.where({id_morador:id_morador.id}).update({nm_morador:nm_morador,apto_morador:apto_morador,bl_morador:bl_morador,email:email,senha:senha,morador:morador,sindico:sindico,porteiro:porteiro}).table("tb_morador").then(data =>{
            response.json({message:"TUDO DEU CERTO"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerMorador(request,response){
        const id = request.params
            database.where({id_morador:id.id}).del().table("tb_morador").then(data =>{
                    response.json({message:"MORADOR DELETADO"})
            }).catch(error=>{
                response.json(error)
            })
    }   
}

module.exports = new TaskController()