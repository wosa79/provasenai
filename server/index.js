const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const app = express()
const PORT = 3002

app.use(cors())
app.use(express.json())

app.get('/logs', (req,res) =>{
  db.query('SELECT * FROM logs', (err,result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.get('/profiles', (req,res) =>{
  db.query('SELECT * FROM profiles', (err,result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.post('/logs', (req,res) => {
  const date = req.body.date
  db.query('INSERT INTO logs (date) VALUES (?)', [date], (err,result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.post('/profiles', (req,res) => {
  const profile = req.body.profile
  const round = req.body.round
  db.query('INSERT INTO profiles (profile, round) VALUES (?, ?)', [profile, round], (err,result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
