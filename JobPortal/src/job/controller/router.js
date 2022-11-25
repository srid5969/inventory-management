const router = require('express').Router();;
const service=require('../service/service')
module.exports = router;




router.post('/',service.postJobs)
router.get('/',service.getJobs)
