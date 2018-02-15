const router = require('express').Router()
const https = require('https')

const url = 'https://restcountries.eu/rest/v2/name/united'

router.get('/', (req, res) => {
    res.send('Whattup, welcome to this shitty server - try /countries')
})

var req = https.get(url, (res) => {

    var bodyChunks = [];

    res.on('data', (chunk) => {
        bodyChunks.push(chunk);

    }).on('end', () => {
        var body = []
        bodyChunks = bodyChunks.toString()
        body.push(JSON.parse(bodyChunks));

        router.get('/countries', (req, res) => {
            res.send(body)
        })
    })
});

req.on('error', (e) => {
    console.log('ERROR: ' + e.message);
});

module.exports = router