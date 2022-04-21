const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('router/index.js file: res.locals: ', res.locals);
  res.json({message: 'hi auth2.0'})
})

module.exports = router;
