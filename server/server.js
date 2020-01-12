const express = require('express')
const app = express()
const port = 8000

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.post('/', (req, res) => {
  const json = JSON.stringify(req.body)
  console.log('=====[받음]=====')
  console.log(json)
  res.json({
    value: 'OK'
  })
})

app.listen(port, () => {
  console.log(`테스트 서버 돌아간다~ 돌아가! [port : ${port}]`)
})
