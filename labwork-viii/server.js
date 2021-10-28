const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const router = express.Router()

app.use(express.static('app'))
app.use("/", router)

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/html/index.html')
})

app.listen(port, () => console.info(`Порт ${port} открыт`))

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    fs.writeFile('survey.json', JSON.stringify(request.body), function (error) {
        if (error) throw error
    })
    response.sendFile(__dirname + "/app/html/index.html");
});

app.post("/survey", urlencodedParser, (req, res) => {
    fs.readFile("survey.json", 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});