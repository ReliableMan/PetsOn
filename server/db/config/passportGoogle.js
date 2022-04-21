const passport = require('passport');
const passportGoogle = require('passport-google-oauth2');
const { User } = require('../models');

const GoogleStrategy = passportGoogle.Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.REACT_APP_GOOGLE_CALLBACK_URL
},
  async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
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
