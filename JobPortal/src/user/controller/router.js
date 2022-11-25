const router = require('express').Router();;

module.exports = router;
const Model = require('../model/Users')
const service = require('../service/service')


router.post('/',service.post )


router.get('/', service.get)