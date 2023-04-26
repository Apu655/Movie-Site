const {createPool} = require('mysql')
require('dotenv').config();

// Tried with postgressSQL
// const pool = createPool({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.MYSQL_DB,
//     connectionsLimit:10
// });

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "movie_stream_site",
    connectionsLimit: 10,
  });


// pool.query(`select * from users where`,(err,result,fields)=>{
//     if(err){
//         return console.log(err)
//     }
//     return console.log(result)
// })

module.exports = pool;