const express = require('express')
const cors = require('cors')
const request = require('request')
const url = 'https://restcountries.herokuapp.com/api/v1/region/europe'
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3030
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
res.send('Whattup - try /countries (if you dare)')
})

app.get('/countries', (req, res) => {
    request(url, function(error, response, body) {
        var data = JSON.parse(body);
        res.send(body)
    })
})


app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        message: err.message,
        error: app.get('env') === 'development' ? err : {}
    })
})