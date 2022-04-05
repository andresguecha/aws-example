const express = require('express')
const { get } = require('http')

const app = express()

app.get('/', (req, res) => res.send('<h1>Hello World express html</h1>'))

app.listen(8080)
console.log('server on port : 8080')