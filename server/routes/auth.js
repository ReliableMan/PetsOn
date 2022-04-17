const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { Speciality } = require('../db/models');

// * регистрация нового пользователя
router.post('/signup', async (req, res) => {
  const {
    userSurname, name, userName,
    birthday,
    userEmail,
    userPassword } = req.body.inputs;
  const { value, value1 } = req.body;

  console.log('req.body', req.body.inputs);
  console.log('req.body-->', value, 'req.body-->', value1);

  try {
    const hashedPass = await bcrypt.hash(userPassword, 15);
    const user = await User.create({
      username: userName,
      email: userEmail,
      password: hashedPass,
      first_name: userSurname,
      last_name: name,
      date_birth: birthday,
      role: value,
    });

    const speciality = await Speciality.create({ title: value1 })

    const timeCreationUser = new Date().toLocaleDateString();
    req.session.user = {
      id: user.id,
      login: user.username,
      email: user.email,
      time: timeCreationUser,
      surname: user.first_name,
      name: user.last_name,
      birthday: user.date_birth,
      role: user.role,
      speciality: speciality.title
    };
    res.json(req.session.user);
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);

    res.status(500).json({ error: err.message })
  }
});

// * авторизация пользователя
router.post('/signin', async (req, res) => {
  const { userEmail, userPassword } = req.body;
  console.log('req.body12', req.body);

  try {
    const user = await User.findOne({ where: { email: userEmail }, raw: true });
    const isValidPass = await bcrypt.compare(userPassword, user.password);

    if (isValidPass) {
      req.session.user = {
        id: user.id,
        name: user.username,
        email: user.userEmail,
      };
    }
    res.json(req.session.user);
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
  }
});

// * выход пользователя
router.get('/signout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userCookie');
  res.status(200).end();
});

// * получить информацию о текущей сессии
router.get('/session', (req, res) => {
  if (!req.session.user) {
    req.session.user = {};
  }
  res.json(req.session.user);
});

module.exports = router;
