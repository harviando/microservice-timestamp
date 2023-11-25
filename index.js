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
  const { date_value } = req.params;
  let date;
  
  if (!req.params.date_value) { // If there's no date value, return current date
    date = new Date();
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  } else { // Else, try to parse the date value
    if (/^\d+$/.test(date_value)) {
      date = new Date(parseInt(date_value));
    } else {
      date = new Date(date_value);
    }

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
