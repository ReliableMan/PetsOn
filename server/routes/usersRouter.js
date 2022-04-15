const router = require('express').Router();

// USER PROFILE
router
  .route('/profile/:id')
  // .get(checkUser, checkProtection, async (req, res) => {
  .get(async (req, res) => {
    try {
      // const userId = await User.findByPk(req.params.id);
      const userId = Number(req.params.id);
      const allTweets = await Tweet.findAll({ where: { id: userId }, raw: true });
      res.render('profile', { allTweets });
    } catch (error) {
      res.sendStatus(500)
    }
  })

module.exports = router;
