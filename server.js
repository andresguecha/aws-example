const express = require('express')
const { get } = require('http')

const app = express()

app.get('/', (req, res) => res.send('Hello Word!! with express'))

app.listen(3000)
console.log('server is running 3000')