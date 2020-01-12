const request = require('request')

const options = {
  uri: process.argv[2],
  method: 'POST',
  body: {
    value: 'Test'
  },
  json: true
}

request.post(options, (error, res, body) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(body)
})
