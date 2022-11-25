const Model = require('../model/Users')


exports.post = (async (req, res) => {

    console.log("Next()")
    const data = new Model({
        User: req.body.user,
        password: req.body.password
    })

    data.save()
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

)


exports.get = (
    async (req, res) => {
        const data = await Model.find()
            .then(data => res.send(data))
    })


exports.login = (async (req, res) => {
    const body = req.body;
    const data = await Model.aggregate([{
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
        console.log("user    " + body.user + "     is logged in")
        res.json("Hello " + body.user)
    } else {
        res.json({ message: "Password is Wrong ", mes: "Please Check the passwprd" })
    }
})




exports.deleteuser = (async (req, res) => {
    const body = req.body;
    const data = await Model.aggregate([{
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
        console.log("user    " + body.user + "     is delete")
        const deleteuser = await Model.deleteOne({ User: body.user, password: password })
        res.json("Bye " + body.user + "Stranger")
    } else {
        res.json({ message: "Password is Wrong ", mes: "Please Check the passwprd" })
    }
})