var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',       
        password : 'matheus250302',  
        database : 'sanpetersburgo'       
     }
});
module.exports = knex