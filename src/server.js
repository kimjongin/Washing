const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const LineAPI = require('line-api')
var path    = require("path");

app.listen(5000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/home/', (req, res) => {
//   setTimeout(function(){ console.log("Hello"); }, 3000)
//   const notify = new LineAPI.Notify({
//     token: 'mUpNWPF4d66rM2cXxUOeaTaVjMUuRpSRwyVDKmtCRGN'
//   })
//   notify.send({
//     message: 'Hello Machine',
//     sticker: 'smile' // shorthand 
//     // sticker : { packageId: 1, id: 2 } // exact ids 
//     // image: 'test.jpg' // local file 
//     // image: { fullsize: 'http://example.com/1024x1024.jpg', thumbnail: 'http://example.com/240x240.jpg' } // remote url 
// }).then(console.log)
// { status: 200, message: 'ok' } 
  res.sendFile(path.join(__dirname+'/index.html'));
 
})
//mUpNWPF4d66rM2cXxUOeaTaVjMUuRpSRwyVDKmtCRGN TokenId pop
//iCUD740dyQeyufHnyI11NWNBXYOH8Qfi93LKVx9bqoe  Token vear
app.get('/home/addMaching/', (req,res) => {
  const tokenId = req.query.tokenId
  console.log(tokenId)
  const notify = new LineAPI.Notify({
    token: tokenId
  })
  notify.send({
    message: 'Hello Machine',
    sticker: 'smile' // shorthand 
    // sticker : { packageId: 1, id: 2 } // exact ids 
    // image: 'test.jpg' // local file 
    // image: { fullsize: 'http://example.com/1024x1024.jpg', thumbnail: 'http://example.com/240x240.jpg' } // remote url 
}).then(console.log)
})

// app.get('/api/source/', (req, res) => {
//   const getAllSource = session.run('MATCH (s:Source) RETURN s')
//   getAllSource.then((result) => {
//     session.close()
//     const data = result.records.map(item => ({
//       id: item._fields[0].identity.low,
//       name: item._fields[0].properties.name,
//       type: item._fields[0].properties.type,
//       url: item._fields[0].properties.url,
//     }))
//     res.json(data)
//     db.close()
//   })
// })

// app.get('/source/:id/', (req, res) => {
//   const getSource = session.run('MATCH (n :Source) WHERE ID(n) = {id} RETURN n', { id: Number(req.params.id) })
//   getSource.then((result) => {
//     session.close()
//     if (result.records[0]._fields[0].properties.type === 'Database') {
//       const data = ({
//         name: result.records[0]._fields[0].properties.name,
//         type: result.records[0]._fields[0].properties.type,
//         column: result.records[0]._fields[0].properties.column,
//       })
//       res.json(data)
//     } else {
//       const data = ({
//         name: result.records[0]._fields[0].properties.name,
//         type: result.records[0]._fields[0].properties.type,
//         url: result.records[0]._fields[0].properties.url,
//         tag: result.records[0]._fields[0].properties.tag,
//       })
//       res.json(data)
//     }
//     db.close()
//   })
// })

// app.post('/source/', (req, res) => {
//   const getSource = session.run(
//     'CREATE n = (source:Source:Type {name:{name}, url:{url}, type:{type}, tag:{tag}}) RETURN n',
//     {
//       name: req.body.name,
//       url: req.body.url,
//       type: req.body.type,
//       tag: req.body.tag,
//     },
//   )
//   getSource.then((result) => {
//     session.close()
//     res.json(result.records[0]._fields[0].start)
//     db.close()
//   })
