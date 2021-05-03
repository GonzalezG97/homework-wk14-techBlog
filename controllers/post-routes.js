const router = require('express').Router();
const { Post } = require('../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content
        })
        res.status(200).JSON(newPost);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})