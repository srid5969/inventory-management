const mongoose = require('mongoose')

const UserJobSchema = new mongoose.Schema({

    Jobs: {
        type: mongoose.Types.ObjectId,
        ref: "Jobs",
        required: true
    },
    Users: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    },
    AppliedDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("UserJob", UserJobSchema)