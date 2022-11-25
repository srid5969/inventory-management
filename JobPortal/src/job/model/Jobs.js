const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
    Job_title: {type: String, required: true},
    Location: {type: String, required: true}

})
module.exports =mongoose.model("Jobs",jobsSchema)