const router = require('express').Router();
const { User } = require('../db/models');

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

module.exports = router;
