const router = require("express")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = router()
const Letter = require("../models/letter")

app.post("/show", urlencodedParser, (req, res) => {
    const letter = Letter.find({}).then((recvLetter) => {
        const context = {
            letterList: recvLetter.map((recvLetter) => {
                return {
                    _id: recvLetter._id,
                    sender: recvLetter.sender,
                    receiver: recvLetter.receiver,
                    date: recvLetter.date,
                    type: recvLetter.type ? 'Заказное' : 'Обычное'
                }
            }),
        }
        res.render("show", {
            title: "labwork-ix",
            letter: context.letterList
        })
    })
})


module.exports = app