const router = require("express")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const app = router()
const Letter = require("../models/letter")

app.post("/filterByDate", urlencodedParser, async (req, res) => {
    Letter.find({}, function (err, doc) {
        if (err) return
        let letters = []
        doc.forEach(letter => {
            if (letter.date.substr(0, 10) === req.body.date.substr(0, 10)) {
                letters.push(letter.sender)
            }
        })
        console.log("найденные значения : " + letters)
        res.send(letters)
    });
})
app.post("/filterByType", urlencodedParser, async (req, res) => {
    Letter.find({type: req.body.type}, function (err, doc) {
        if (err) return
        let letters = []
        doc.forEach(letter => {

            letters.push(letter.receiver)

        })
        console.log("найденные значения : " + letters)
        res.send(letters)
    });
})

module.exports = app