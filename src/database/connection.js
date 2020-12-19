var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',       
        password : 'matheus250302',  
        database : 'sanpetersburgo'       
     }
});
module.exports = knex