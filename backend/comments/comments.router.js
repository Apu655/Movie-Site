const {
  createComments,
  getComments,
  deleteCommentById,
  updateComment,
} = require("./comments.controller");
const router = require("express").Router();
const auth = require("../middleware/auth")
router.use(auth)
router.post("/post", createComments);
router.get("/get", getComments);
router.delete("/delete/:id", deleteCommentById);
router.put("/update", updateComment);
module.exports = router;
