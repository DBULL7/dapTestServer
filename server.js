const express = require('express')
const app = express()
const request = require('request')
const cors = require('express-cors');

// app.use(cors());
app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', function (req, res) {
  request({
    url: `http://dbull7.pythonanywhere.com/`,
  },
    function (error, response, body) {

    if(!error && response.statusCode === 200) {
      res.send(body)
    } else {
      res.status(500).send({
        error: 'unknown issue'
      })
    }
  })
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
