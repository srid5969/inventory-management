const router = require('express').Router();;

module.exports = router;
const service=require('../service/service')


router.post('/', service.post)


router.get('/',service.all)


router.patch('/user/:user/apply/:job',service.apply)

router.get('/get',service.getByJobId)


router.get('/get', service.getByUserId)

router.get('/test/:user/job/:job', service.test)


router.get('/as',service.demo)

router.get('/get/user', service.getUsers)



router.get('/get/job', service.getJobs)


router.get('/demo',service.demo)