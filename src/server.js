const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const LineAPI = require('line-api')
var path    = require("path")
var mysql = require('mysql')

app.listen(5000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/home/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/home/addMaching/', (req, res) => {
  const tokenId = req.query.tokenId
  console.log(tokenId)
  const notify = new LineAPI.Notify({
    token: tokenId
  })
  notify.send({
    message: ' ผ้าซักเสร็จแล้วววจ้าาาาาาาาา',
    sticker: 'smile',
  }).then(console.log)

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "washingdb",
  })
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
  });

})