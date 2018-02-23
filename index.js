const express = require('express')
const cors = require('cors')
const axios = require('axios')
const url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3030
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
res.send('Whattup - try /countries')
})

app.get('/countries', (req, res) => {
    axios.get(url, function(error, response, body) {
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