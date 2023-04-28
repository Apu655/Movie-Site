const {createUser,getUsers,login,deleteUser} = require("./user.controller")
const auth = require("../middleware/auth")
const router = require("express").Router()

router.post("/register",createUser)
router.get("/get",getUsers)
router.post("/login",login)
router.delete("/delete",deleteUser)

module.exports=router