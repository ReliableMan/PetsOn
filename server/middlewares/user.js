module.exports = (req, res, next) => {
  console.log('user', req.user)
  if(req.user) res.locals.username = req.user?.name; //passport.js записывает сессии в req.user
  next();
};

