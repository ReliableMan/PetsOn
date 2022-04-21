const passport = require('passport');
const { User } = require('../db/models/user');

// функция завершает запрос с ошибкой аутентификации 
// eslint-disable-next-line no-unused-vars
function failAuth(res, message) {
  console.log('file-auth.js message: ', message);
  return res.status(401).json({ session: false, message: message });
}
// функция подготавливает пользователя для записи в сессию
// мы не храним пароль в сессии, поэтому записываем только id и name
function serializeUser(user) {
  return {
    id: user.id,
    name: user.name,
  };
}

exports.signUpLocalPassport = (req, res, next) => {
  console.log('user>>>...>>>...>>>')
  passport.authenticate('local', (err, user, info) => {
    console.log('err', err?.message);
    console.log('user', user);
    console.log('info', info);
    if (err) return res.json({ session: false, message: err.message, err });
    if (!user) 
    return res.json({ session: false, message: 'Пользователь не найден' });
    req.logIn(user, function (err) { 
      if (err) return res.json({ session: false, message: err.message, err });
      else 
          return res.json({
            session: true,
            message: `Пользователь ${user.name} ${info.message}`,
            user: serializeUser(user),
          });
    });
  }) (req, res, next); 
};

exports.signIn = (req, res) => {
  return res.json({
    session: true,
    message: `Успешный вход ${req.user.name}`,
    user: serializeUser(req.user),
  });
};

exports.signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).end();
    res.clearCookie('connect.sid');
    return res.json({ message: 'Успешный выход'});
  });
}
exports.deleteUsers = async (req, res, next) => {
  const result = await User.deleteMany({});
  if (result.ok === 1) return next();
  else return res.status(400).end();
};

exports.sendStatus = (req, res) => {
  res.json({
    session: true,
    message: 'авторизован',
    user: serializeUser(req.user),
  });
};
