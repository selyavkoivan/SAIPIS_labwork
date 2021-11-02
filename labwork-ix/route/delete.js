const router = require("express")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = router()
const Letter = require("../models/letter")

app.post("/remove", urlencodedParser, async (req, res) => {
    let idArray = []
    if (req.body['positions[]']) idArray = req.body['positions[]'];
    if (req.body['position[]']) idArray.push(req.body['position[]']);
    for (let id in idArray) {

        await Letter.remove({_id: req.body['positions[]'][id]})
    }
    console.log("данные успешно удалены")
    res.send()
})


module.exports = app