const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    User: {type: String, required: true, index: {unique: true}},
    password:{type: String, required: true}

})
module.exports =mongoose.model("Users",UsersSchema)