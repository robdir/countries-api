const express = require('express')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
    res.send('Whattup')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})