const passport = require('passport');
const isAuth = require('../middlewares/auth') ;
const { signOut, sendStatus } = require('../controllers/auth');

const router = require('express').Router();
router.get('/signout', signOut);
router.get('/check', isAuth, sendStatus);

router.get('/google',
  passport.authenticate('google', { scope: ['profile']}));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin' }),
  function(req, res) {
    // в случае успешной авторизации, редиректимся на главную
    res.redirect('/');
  });


module.exports = router;
