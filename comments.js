// Create web server

// Import express
const express = require("express");

// Import comment controller
const commentController = require("../controllers/commentController");

// Create router
const router = express.Router();

// Create routes
router.get("/", commentController.comment_index);
router.post("/", commentController.comment_create_post);
router.get("/:id", commentController.comment_details);
router.delete("/:id", commentController.comment_delete);

// Export router
module.exports = router;