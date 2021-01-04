const path = require("path")
const express = require("express")
const app = express()

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

// parse incoming JSON payloads
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/secret", (req, res) => {
  if (req.body.username === "user44" && req.body.password == "AZERTY") {
    res.json({ message: " user44 is logged in.", status: "success" })
  } else {
    res.json({ message: "Something went wrong.", status: "failure" })
  }
})

app.listen(process.env.PORT || 3000)
