const express = require('express')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
    res.send('Whattup')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get('https://restcountries.eu/rest/v2/name/united',
 (req, res) => {
   const countries = res.body
   .sort({ name: -1 })
   .then((countries) => res.json(countries))
   .catch((error) => next(error))   
 })