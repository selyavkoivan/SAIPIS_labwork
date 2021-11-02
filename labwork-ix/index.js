const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const add = require("./route/add")
const remove = require('./route/delete')
const show = require('./route/show')
const update = require('./route/update')
const filter = require('./route/filter')
const { error } = require('console')

const port = 3000
const app = express()

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use(add)
app.use(remove)
app.use(show)
app.use(update)
app.use(filter)

mongoose.connect('mongodb://127.0.0.1:27017/mail', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected successfully')
}).catch((error) => {
    console.error(error)
})
app.listen(port, () => console.info(`Порт ${port} открыт`))
