const router = require('express').Router();

const { Post, Comment, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.get('/dogs', async (req, res) => {
  try {
    const dogPost = await Post.findAll({ where: { pet_id: 1 }, raw: true })
    return res.json(dogPost)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.get('/cats', async (req, res) => {
  try {
    const catPost = await Post.findAll({ where: { pet_id: 2 }, raw: true })

    return res.json(catPost)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.get('/:postId', async (req, res) => {
  const { postId } = req.params
  try {
    const post = await Post.findOne({ where: { id: postId }, raw: true })

    return res.json(post)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.post('/:postId/comments', async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req

    if (!userId)
      res.status(401).json({ error: 'no session id' })
    else {
      const { params: { postId } } = req

      const user = await User.findOne({ where: { id: userId }, raw: true })
      //console.log('user', user.username);
      const post = await Post.findOne({ where: { id: postId }, raw: true })

      if (!user) {
        res.status(404).json({ error: `user with id ${userId} not found` })
      } else if (!post) {
        res.status(404).json({ error: `post with id ${postId} not found` })
      } else {
        const { body: { text } } = req
        const comment = await Comment.create({ user_id: userId, post_id: postId, text, date: new Date })
        //console.log(user.name, 'username');
        res.status(201).json({ comment, username: user.name })

      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/:postId/comments', async (req, res) => {
  // TODO read all the comments for the post with id postId 
  try {
    const { params: { postId} } = req

    const comments = await Comment.findAll({
      where: { post_id: postId },
      include: {
        model: User,
          //  where: { username: userName }
          attributes: ['username'] 
       }
    })

    return res.json(comments).status(202)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router;
