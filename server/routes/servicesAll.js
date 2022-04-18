const router = require('express').Router();
const { Service } = require('../db/models');
const { Specialities } = require('../db/models');



router.post('/new', async (req, res) => {
  const { 
    title, price, description 
  } = req.body.inputs;
  const {id} = req.session?.user;
  // const compareServices = await Specialities.findAll({ include: user_id });

// console.log(compareServices);
  try {
  // const {service} = req.body;
  console.log(req.session.user.id, "это req.session.userId ")
  console.log(req.session.user.login, "это req.session.login ")
    const serviceNew = await Service.create({ 
      title, 
      price, 
      description,
      user_id: id,
      // speciality_id,
    });
  res.json(serviceNew)
  }catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
    res.status(500).json({ error: err.message })
  }

  console.log('req.body', req.body.inputs);
  // console.log('req.body-->', service);
})

module.exports = router;
