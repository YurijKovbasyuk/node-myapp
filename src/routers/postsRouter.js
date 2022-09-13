const express = require("express");

const router = express.Router();

const {
  addPostValidation,
  patchPostValidation,
} = require("../middlewares/validationMiddlewares.js");

const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  changePatchPost,
  changeDeletePost,
} = require("../controllers/postsController");

// GET /api/posts => [...posts]
router.get("/", getPosts);

// GET /api/posts/<123> => {post with id 123}
router.get("/:id", getPostById);

// POST /api/posts => [newPost, ...posts]
router.post("/", addPostValidation, addPost);

// PUT /api/posts => [changedPost, ...posts]
router.put("/:id", addPostValidation, changePost);

// PATCH /api/posts => [changedPost, ...posts]
router.patch("/:id", patchPostValidation, changePatchPost);

// DELETE /api/posts/<123> => [post without with id 123]
router.delete("/:id", changeDeletePost);

module.exports = { postsRouter: router };
