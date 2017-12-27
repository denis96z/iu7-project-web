var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuestKingdom');

mongoose.connection.on('connected', function () {
    console.log('Connected to database.');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function (err) {
    console.log('Disconnected from database.');
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function() {
        console.log('Disconnected from database through ' + msg + '.');
        callback();
    })
};

process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});

var quest = require('./quest');