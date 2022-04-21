const passport = require('passport');
const passportGoogle = require('passport-google-oauth20');
const { User } = require('../models');


// эти две функции с сайта паспорта, они записывают объект юзера в req.user
passport.serializeUser(function (user, done) {
  // эта ф-я отрабатывает когда вызывается done(null, user) из passport.use
  console.log('serializeUser passport.js', user.id);
  done(null, user.id); // записывает в сессию user.id
});

passport.deserializeUser( async function (id, done) {
  // эта функция отрабатывает при каждом запросе
  console.log('deserializeUser passport.js', id);
  let user = await User.findByPk(id);
  if (user){ 
    done(null, user);
  } else {
    done('Что-то как-то коряво')
  }
  });

const GoogleStrategy = passportGoogle.Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.REACT_APP_GOOGLE_CALLBACK_URL
},
  async (accessToken, refreshToken, profile, cb) => {
    try {
      
      let user = await User.findOne({where: { googleId: profile.id }});
      console.log('cb', cb)

      if (user) {
        cb(null, user);
      } else {
        user = await User.create({
          username: profile.displayName,
          email: `${profile.id}@${profile.provider}.ru`,
          password: profile.id,
          last_name: profile.displayName,
          googleId: profile.id,
        });
        cb(null, user);
      }
    } catch ({message}) {
      console.error('passportGoogle.js file', message)
      cb(message)
    }
  }
));
