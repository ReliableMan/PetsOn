const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { User } = require('../db/models');


// MULTER
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
// MULTER 



// USER PROFILE
router
  // .get(checkUser, checkProtection, async (req, res) => {
  .get('/profile/:id', async (req, res) => {

    const { id } = req.params;
    console.log(id, "id");
    try {
      // const userId = await User.findByPk(req.params.id);
      const allUserData = await User.findOne({ where: { id }, raw: true });
      res.json(allUserData)
    } catch (error) {
      res.sendStatus(500)
    }
  })


  // USER PROFILE EDIT
  router
  // .get(checkUser, checkProtection, async (req, res) => {
  .put('/profile/:id/edit', async (req, res, next) => {

    const { id } = req.params;
    //console.log(login, "login");
    const {name, email, password, userSurname, birthday, aboutMe } = req.body;
    console.log(req.body, '------');
    res.json({ok: true}).status(200)
    
    //  try {
    //    const user = await User.findOne({ where: { id }, raw : true });

    //    console.log(user, 'ppppppppp');
    //    res.send(user).end()
    //   //  const hashedPassword = await bcrypt.hash(password, 10);
      
    //      user.set({
    //      login: username, email, first_name, last_name, date_birth, role, description
    //      });
      
    //   //  await user.save();
      
    //   //  req.session.destroy((err) => {
    //   //  if (err) return next(err);
    //   //  res.clearCookie('Cookie');
    //   //  console.log('это будет наш юзер===>', user);
    //   //   // res.sendStatus(200);  * Жизненный цикл заканчивается у ручки
    //   //   // res.status(200);  * то же самое
    //   //  res.json({
    //   //  ok: true,
    //   //  });
    //   //  });
    //    } catch (err) {
    //    console.error('Err message: ', err.message);
    //    } 
  })

   // USER PROFILE PHOTO UPLOAD
   router
    .route('/profile/:id/upload')
    .post(upload.single('photo'), async (req, res) => {
      try {
        const { path } = req.file;
        const photo = path;
        console.log('req.body', req.body);
        console.log('req.file', req.file);
        // const newPhoto = await User.create({ photo });
        // console.log(newPhoto);
        // res.redirect(`/users/profile/${id}`);
      } catch (error) {
        res.render('error', {
          message: 'Не удалось добавить запись в базу данных.',
          error: {}
        });
      }
    });

module.exports = router;
