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

var req = https.get(url, function (res) {

    var bodyChunks = [];

    res.on('data', function (chunk) {
        bodyChunks.push(chunk);
        
    }).on('end', function () {
        var body = []
        bodyChunks = bodyChunks.toString()
        body.push(JSON.parse(bodyChunks));

        app.get('/countries', (req, res) => {
            res.send(body)
        })
    })
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
});