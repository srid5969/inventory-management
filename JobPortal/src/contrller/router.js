const router = require('express').Router();
module.exports = router;
const userService = require('../user/service/service')
const jobService = require('../job/service/service')
const JobUserService = require('../userJobs/service/service')
//middle war
const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}
router.use(LoggerMiddleware)

router.get('/', (req, res) => {
    res.json("Hello World")
})

//localhost:8080/signup


router.post('/signup', userService.post)


//localhost:8080/login

router.post('/login', userService.login)

//localhost:8080/user/delete

router.delete('/user/delete', userService.deleteuser)


//localhost:8080/jobs
router.get('/jobs', jobService.getJobs)


//localhost:8080/jobs/apply/
router.put('/job/apply/:job', JobUserService.applyForJobUsing)


//localhost:8080/job
router.post('/job', jobService.postJobs)
