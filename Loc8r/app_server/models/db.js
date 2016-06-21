var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Whatever';
mongoose.connect(dbURI);

// Readline stuff
var readLine = require('readline');

if (process === "win32") {
    var r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdin
    });

    r1.on("SIGINT", function() {
       process.emit("SIGINT");
    });
}

// mongoose connection diagnostics
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error" ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected!!!');
});

gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function () {
     console.log('Mongoose disconnected through ' + msg)
     callback();
  });
};

// Nodemon restarts
process.once('SIGUSR2', function() {
   gracefulShutdown('nodemon restart', function() {
      process.kill(process.pid, 'SIGUSR2')
   });
});

// app termination
process.on('SIGINT', function() {
   gracefulShutdown('app termination', function() {
      progress.exit(0);
   });
});

// heroku termination
process.on('SIGTERM', function() {
   gracefulShutdown('Heroku app shutdown', function() {
       process.exit(0);
   }) ;
});

// Bring in you schemas and models
require('./locations');