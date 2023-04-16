const {create,getComments, deleteCommentById, updateComment} = require("./comments.service")
module.exports={
    createComments:(req,res)=>{
        const body = req.body
        create(body,(err,results)=>{
            if (err){
                return res.status(500).json({
                    success:0,
                    message:"An error occured!"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Your comment has been posted.",
                data:results
            })
        })
    },
    getComments:(req,res)=>{
        const {movie_id} = req.query
        getComments(movie_id,(err,results)=>{
            if (err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:"Some error occured while fetching the data."
                })

            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    deleteCommentById:(req,res)=>{
        const {id} = req.params
        deleteCommentById(id,(err,results)=>{
            if (err){
                return res.json({
                    success:0,
                    message:"An error occured!"
                })
            }
            return res.status(200).json({
                success:1,
                message:"The comment has been deleted."
            })
        })
        
    },
    updateComment:(req,res)=>{
        const body = req.body
        updateComment(body,(err,resutls)=>{
            if (err){
                return res.json({
                    success:0,
                    message:"Failed to update the comment"
                })

            }
            return res.json({
                success:1,
                message:"Comment is edited."
            })
        })

    }
}