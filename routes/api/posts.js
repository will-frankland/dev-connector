const express = require('express');
const router = express.Router();
const mogoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');

// @route     GET api/posts/test
// @desc      Tests post route
// @access    Public
router.get('/test', (req, res) => res.json({msg: "Posts works"}));

// @route     POST api/posts
// @desc      Create new post
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req,res) => {
  const newPost = new Post({
    test: req.body.text,
    name: req.body.name,
    avatar: req.body.name,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
});


module.exports = router;