const express = require('express')
const cors = require('cors')
const https = require('https')


const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
    res.send('Whattup')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

const url = 'https://restcountries.eu/rest/v2/name/united'

const req = https.get(url, (res) => {
    app.get('/countries', (req, res) => {
        res.send(body)
    })

    req.on('error', (e) => {
        console.log(e.message)
    })
})