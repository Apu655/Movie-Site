const {
  createComments,
  getComments,
  deleteCommentById,
  updateComment,
} = require("./comments.controller");
const router = require("express").Router();
router.post("/post", createComments);
router.get("/get", getComments);
router.delete("/delete/:id", deleteCommentById);
router.put("/update", updateComment);
module.exports = router;
