const express = require('express')
const cors = require('cors')
const {countries} = require('./routes')

const PORT = process.env.PORT || 3030

const app = express()

app
    .use(countries)
    .use((req, res, next) => {
        const err = new Error('Not Found')
        err.status = 404
        next(err)
    })

    .use((err, req, res, next) => {
        res.status(err.status || 500)
        res.send({
            message: err.message,
            error: app.get('env') === 'development' ? err : {}
        })
    })



app.get('/', (req, res) => {
    res.send('Whattup, welcome to this shitty server - try /countries')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})