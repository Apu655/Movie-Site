const { createComments, getComments,deleteCommentById } = require("./comments.controller");
const router = require("express").Router();
router.post("/post", createComments);
router.get("/get", getComments);
router.delete("/delete/:id", deleteCommentById);

module.exports = router;
