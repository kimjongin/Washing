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

app.get('/home/machine/', (req, res) => {
  res.sendFile(path.join(__dirname+'/Machine.html'))
  
})


app.get('/home/addMaching/', (req, res) => {
  const tokenId = req.query.tokenId
  console.log(req.query)
  const notify = new LineAPI.Notify({
    token: 'iCUD740dyQeyufHnyI11NWNBXYOH8Qfi93LKVx9bqoe'
  })
  notify.send({
    message: 'ผ้าซักเสร็จแล้วววจ้าาาาาาาาา',
    sticker: 'smile',
  }).then(res.redirect('http://cdnqrcgde.s3-eu-west-1.amazonaws.com/wp-content/uploads/2013/11/jpeg.jpg'))
})