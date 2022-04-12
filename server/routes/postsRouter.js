const router = require('express').Router();
const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname)
  }
})
const upload = multer({ storage: fileStorageEngine });
const { Post } = require('../../db/models/');

router
  .route('')
  .get(async (req, res) => {
    const allPosts = await Post.findAll({ order: [['id', 'DESC']] });
    return res.json({ allPosts });
  })

// CREATE NEW POST
router
  .route('/new')
  .post(upload.single('image'), async (req, res) => {
    try {
      const { title, category, text } = req.body;
      const { path } = req.file;
      const image = path;
      // console.log('req.body', req.body);
      // console.log('req.file', req.file);
      const newPost = await Post.create({ title, category, text, image });
      // console.log(newPost);
      res.redirect(`/posts/${newPost.id}`);
    } catch (error) {
      res.json({ isUpdateSuccessful: false, statusCode: 500,errorMessage: 'Не удалось добавить запись в базу данных.' });
    }
  });

// GET POST
router
  .route('/:id')
  .get(async (req, res) => {
    let post;
    try {
      post = await Post.findOne({ where: { id: req.params.id } });
    } catch (error) {
      res.json({ isUpdateSuccessful: false, statusCode: 500,errorMessage: 'Не удалось получить запись из базы данных.' });
    }
    res.render('profile', { post });
  })
  .delete(async (req, res) => {
    try {
      // const { postId } = req.params;
      // console.log('delete post', req.params.id);
      await Post.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      res.json({ isUpdateSuccessful: false, statusCode: 500,errorMessage: 'Не удалось удалить запись из базы данных.' });
    }
  });

// EDIT POST
router
  .route('/:id/edit')
  .get(async (req, res) => {
    let post = await Post.findOne({ where: { id: req.params.id } });
    res.json({ post });
  })
  .put(async (req, res) => {
    let post;

    try {
      const { title, category, text } = req.body
      post = await Post.update({ title, category, text }, { where: { id: req.params.id }, returning: true, plain: true });
    } catch (error) {
      return res.json({ isUpdateSuccessful: false, statusCode: 500,errorMessage: 'Не удалось обновить запись в базе данных.' });
    }
    return res.json({ isUpdateSuccessful: true, postid: post[1].id });
  });

module.exports = router;
