const express = require('express');
const router = express.Router();
const {Post} = require('./model');
const {Comment} = require('@app/comments');
const {getManager} = require('typeorm');
/* GET home page. */
router.get('/', async function(req, res, next) {
  let posts = await getManager().getRepository(Post).find({ relations: ['comments'] });
  res.json({ posts: posts });
});

router.get('/create', async function(req, res, next) {
  let postRepository = getManager().getRepository(Post);
  let comment = new Comment(0, 'some fancy content');
  let post = new Post(0, 'some title', 'some description', [comment]);
  try {
    let savedPost = await postRepository.save(post);
    res.json({ post: savedPost });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
