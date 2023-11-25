// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// API to convert date to timestamp and unix value
app.get('/api/:date_value?', (req, res) => {
  let date;
  
  if (!req.params.date_value) {
    date = new Date();
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  } else {
    const { date_value } = req.params;
    const date = new Date(date_value);

    if (isNaN(date)) {
      res.json({ error: 'Invalid Date' })
    } else  {
      res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
      });
    }
  }
  
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
