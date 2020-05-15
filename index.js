var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("a user is connected")
  // Each socket also fires a special disconnect event:
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Socket.ON(): Takes an event name and a callback as parameters
  socket.on('chat message', function(msg){
    console.log(msg)
    // Socket.EMIT(): This emits/sends an event with or without
    //  data to the listening sockets including itself.
    io.emit('fuck', 'fuck you');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
