// console.log("chai aur code");
// import express from 'express'
require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Sandeep13Paul');
})

app.get('/login', (req, res) => {
    res.send('<h1>please Login!</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to Youtube!</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})