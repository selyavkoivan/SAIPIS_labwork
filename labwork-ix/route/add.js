const router = require("express")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = router()
const Letter = require("../models/letter")

app.get("/", (req, res) => {

    res.render("form", {
        title: 'labwork-ix',
    })
})

app.post("/", urlencodedParser, async (req, res) => {
    if(req.body.id)
    {
        Letter.findOne({_id: req.body.id}, function (err, doc) {
            if (err) return
            doc.id = req.body.id
            doc.sender = req.body.sender
            doc.receiver = req.body.receiver
            doc.date = req.body.date
            doc.type = req.body.type


            doc.save()
        });
        console.log("данные успешно изменены {id : " + req.body.id + "}")

    }
    else {
        const letter = new Letter({
            sender: req.body.sender,
            receiver: req.body.receiver,
            date: req.body.date,
            type: req.body.type
        })
        console.log("данные успешно добавлены")
        await letter.save()
    }
})


module.exports = app