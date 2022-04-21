const router = require('express').Router();
const { Service } = require('../db/models');
const { Speciality, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const services = await Service.findAll()
    // const compareServices = await User.findAll({ include: [{model: Speciality, Service}], where: {id:11} });
    // console.log(compareServices[0].Specialities[0].title);

    return res.json(services)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.get('/:serviceId', async (req, res) => {
 const {serviceId} = req.params
 //console.log(serviceId, 'serviceId');
   try {
     const serviceUser = await Service.findAll({ where: { user_id: serviceId }, raw: true })
     console.log(serviceUser, 'serviceUser');
     return res.json(serviceUser)
   } catch (error) {
     res.sendStatus(500)
   }
})



router.post('/new', async (req, res) => {
  const {
    title, price, description
  } = req.body.inputs;
  const { id } = req.session?.user;
  // const compareServices = await User.findAll({ include: [{model: Speciality, Service}], where: {id:11} });
  // console.log(compareServices);

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
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
    res.status(500).json({ error: err.message })
  }

  console.log('req.body', req.body.inputs);
  // console.log('req.body-->', service);
})

router.post ('/delete', async (req, res) => {
  const {id} = req.body;
   console.log(req.body)
   const serviceDel = await Service.findOne ({where: { user_id: id }});
   console.log(serviceDel, 'serviceDel');
   await serviceDel.destroy();
   res.sendStatus(200);
})

module.exports = router;
