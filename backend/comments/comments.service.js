const pool = require("../database")
require("dotenv").config()

module.exports = {
    create:(data,callback)=>{
        pool.query(`INSERT INTO Comments_Table VALUES(?,?,?,?,?)`,[data.id,data.comment,data.movie_id,data.likes,data.author],
        (error,results,fields)=>{
            if (error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    },
    getComments:(movie_id,callback)=>{
        pool.query(`SELECT * FROM comments_table WHERE movie_id=?`,[parseInt(movie_id)],
        (error,results,fields)=>{

            if (error){
                return callback(error)
            }
            return callback(null,results)
        })
    },
    deleteCommentById:(id,callback)=>{
        pool.query(`DELETE FROM comments_table WHERE id = ? `,[id],
        (error,results,fields)=>{
            if (error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    },
    updateComment:(body,callback)=>{
        pool.query(`UPDATE comments_table SET comment= ? WHERE id = ?`,[body.comment,body.id],
        
        (error,results,fields)=>{
            if (error){
                return callback(error)
            }
            return callback(null,results)
        })
    }
}