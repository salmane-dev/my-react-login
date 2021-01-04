const path = require("path")
const express = require("express")
const app = express()
var cors = require('cors')
const jwt = require("jsonwebtoken")

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

const jwtsecret = "My secret string of text"

// parse incoming JSON payloads
app.use(express.json())

//enable cores
cors({credentials: true, origin: true})
app.use(cors())


app.use(express.static(path.join(__dirname, "public")))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})
 

app.post("/login", (req, res) => {
  if (req.body.username === "user44" && req.body.password === "AZERTY") {
    res.json({ status: "success", message: "user44 loged in successfully",  token: jwt.sign({ name: "User 44", id: 44 }, jwtsecret) })
  } else {
    res.json({ status: "failure", error: 'something wrong' })
  }
})
 

app.listen(process.env.PORT || 3000)
console.log('Node server running on port 3000');