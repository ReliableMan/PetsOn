const router = require('express').Router();

// const multer = require('multer');
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "--" + file.originalname)
//   }
// })
// const upload = multer({ storage: fileStorageEngine });
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.json(posts)
    console.log(posts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.get('/pet/:pet_id', async (req, res) => {
  const {pet_id} =req.params
  try {
    const dogPost = await Post.findAll({ where: { pet_id }, raw: true })
    return res.json(dogPost)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

 router.get('/:id', async (req, res) => {
  const {id} =req.params
   try {
     const dogPost = await Post.findOne({ where: { id }, raw: true })
     return res.json(dogPost)
   } catch (err) {
     console.log(err);
     res.sendStatus(500)
   }
 })

module.exports = router;
