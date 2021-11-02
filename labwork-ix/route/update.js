const router = require("express")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = router()
const Letter = require("../models/letter")

app.get('/update', function (req, res) {
    res.render('form', { title: 'Express' });
});

app.post("/update", urlencodedParser, async (req, res) => {
    Letter.findOne({_id: req.body.id}, function (err, doc) {
        if (err) return
        res.send(doc)
    });
});

module.exports = app