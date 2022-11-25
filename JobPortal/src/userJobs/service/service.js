const Model = require('../model/UsersJob')
const User = require('../../user/model/Users')
const Job = require('../../job/model/Jobs')
const mongoose = require('mongoose');
// const { login } = require('../../user/service/service');

exports.post = (async (req, res) => {
    const data = new Model({
        Job: req.body.job,
        User: req.body.user
    })

    data.save()
        .then(data => res.json(data))
})
exports.all = (async (req, res) => {
    const data = await Model.find()
        .then(data => res.send(data))
})

exports.apply = (async (req, res) => {
    const user = req.body.user;
    const job = req.params.job;
    console.log("In apply")

    const userdata = await User.findOne({ "User": user })
    const jobData = await Job.findById(job)

    const cal = new Model({
        Job: job,
        User: user
    })

    // cal.populate({})
    const data = new Model({
        Jobs: jobData,
        Users: userdata
    })
    data.save()
    return (data);

})


exports.getByJobId = (async (req, res) => {
    const jobId = req.query.jobid;

    const data = Model.find({
        "Job": jobId
    })
    // .populate({path:"User",model:User,strictPopulate: false })

    res.send(data)
})


exports.getByUserId = (async (req, res) => {
    const userid = req.query.userid;

    const data = Model.find({
        "User": userid
    })
    // .populate({path:"User",model:User,strictPopulate: false })

    res.send(data)
})


exports.test = (async (req, res) => {
    const user = req.params.user;
    const job = req.params.job;
    // const userdata = await User.findById(user)
    // .populate('')
    // // .select( ' Job User').populate()
    // const jobData = await Job.find({'':user})
    // // cal.populate({})
    // const data1 = new Model({
    //     Job: jobData,
    //     User: userdata
    // })

    // const data = {
    //     user: userdata,
    //     job: jobData
    // }
    console.log()
    const d = await Model.find().populate('JobId').select('User').exec().catch(error => (res.json(error), console.log(error))).then(a => console.log(a))
    res.send(d)
})


exports.demo = (async (req, res) => {
    // const user = new User({
    //     _id: 21,
    //     user: "Testing",
    //     password: "Password"
    // })
    // user.save()
    // const job = new Job({
    //     Job_title: "Junior Backend Developer",
    //     Location: "Bangalore"
    // })
    // job.save()
    // const store = new Model({
    //     Job: job,
    //     User: user
    // })
    // store.save()
    const data = await Model.find()
        .populate("Job")
        .catch(error => res.send(error))
    res.send(data)
})

exports.getUsers = (async (req, res) => {
    const data = await Model.find()
        // .select('_id Job User')
        .populate({ path: "User", model: User, strictPopulate: false })
    // .exec()
    // const prod = await auserJob.aggregate([{
    //     $lookup:{
    //       from:'Job',
    //       localField:'title',
    //       foreignField:'job',
    //       as:'profession' 
    //     }

    // const datas=await Model.aggregate([
    //     {
    //         $lookup:{
    //             from:'UsersJob',
    //             localField:'UsersJob',
    //             foreignField:"UsersJob",
    //             as:'User',
    //             // findById:""
    //         }
    //     }
    // ])
    res.send(data)
})

exports.getJobs = (async (req, res) => {
    const data = await Model.find()
        .populate({ path: "Job", model: Job, strictPopulate: false })
    res.send(data)
})



exports.demo = (async (req, res) => {
    const user = new User({
        user: "Sri",
        password: "sri"
    })
    user.save()
    const job = new Job({
        Job_title: "Developer",
        Location: "Chennai"
    })
    job.save()
    const store = new Model({
        Job: job,
        User: user
    })

    const val = await store.save()
    const data = await Model.find()
        .then(data => res.send(data))
})

exports.login = async (req, res) => {
    const body = req.body;
    const data = await User.aggregate([{
        $match: {
            User: body.user
        }
    }, {
        $group: {
            _id: '$password'
        }
    }])
    const password = data.pop()._id
    if (password == body.password) {
        // res.send("Hello")
        return true
    } else {
        res.send("PassWord Is Wrong")
    }
}

exports.applyForJobUsing = (async (req, res) => {
    const login = this.login(req, res)


    if (login) {
        // const data=await 
        console.log("Its Working")

        this.apply(req, res).then(da => res.send(da))
    }
})




