/** 
  //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/football-clubs'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/football-clubs/index.html'));
});
//console.log(8080)
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('app listening at port 8080')*/

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/football-clubs'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/football-clubs/'}
);
});

app.listen(process.env.PORT || 8080);
console.log('app running at port 8080')