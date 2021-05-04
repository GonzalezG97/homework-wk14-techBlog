const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// To create a new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).JSON(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// To get all comments
router.get("/", async (req, res) => {
  try {
    Post.findAll({
        order: [["created_at", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Comment,
            attributes: ["body"],
            include: {
              model: User,
              attributes: ["username"],
            },
          },
        ],
      });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


