const router = require('express').Router();
const { Service } = require('../db/models');


router.post('/new', async (req, res) => {
  const { 
    serviceTitle, servicePrice, serviceDescription 
  } = req.body.inputs;
  const {service} = req.body;

  console.log('req.body', req.body.inputs);
  console.log('req.body-->', service);
})

module.exports = router;
