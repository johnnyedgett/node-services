var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), 
  Chatroom = require('./api/models/chatroomModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todoListRoutes = require('./api/routes/todoListRoutes'); 
var chatroomRoutes = require('./api/routes/chatroomRoutes'); 
todoListRoutes(app);
chatroomRoutes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('RESTful API server started on: ' + port);
