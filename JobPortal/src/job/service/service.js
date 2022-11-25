
const Model=require('../model/Jobs')

exports.postJobs=(async (req, res) => {
    const data = new Model({
        Job_title: req.body.Job_title,
        Location: req.body.Location
    })

    data.save()
    .then(data=>res.json(data))
});


exports.getJobs=(async (req,res)=>{
    const data= await Model.find().select('Job_title  Location')
    .then(data=>res.send(data))
})