/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Food = mongoose.model('Food');
var Log = mongoose.model('Log');

var wipeCollections = function() {
    var removeUsers = User.remove({});
    // var removeFood = Food.remove({});
    var removeLog = Log.remove({});

    return Promise.all([removeUsers, removeLog]); // removeFood,
};

var seedUsers = function() {

    var users = [{
        email: 'admin',
        name: 'Joanna',
        password: 'admin'

    }, {
        email: 'dan',
        name: 'Dan',
        password: 'dan'
    }];

    return User.create(users);

};

var seedFood = function() {

    var food = [{
        name: 'Fried Chicken',
        photo: 'http://christianarenae.com/csb/wp-content/uploads/2013/11/FriedChicken1.jpg',
        quantity: 50
    }, {
        name: 'Bubble Tea',
        photo: 'http://cdn.honestlyyum.com/wp-content/uploads/2015/10/pumpkin.spice_.bubble.milk_.tea_.with_.boba_.2.1.jpg',
        quantity: 20
    }, {
        name: 'Gyoza',
        photo: 'https://lh5.googleusercontent.com/-cEdUhUf_t00/TYwFIQ97aGI/AAAAAAAAECk/m_Tjl8jvU5E/s1600/gyoza.jpg',
        quantity: 10
    }];

    return Food.create(food);

};

connectToDb
    .then(function() {
        return wipeCollections();
    })
    .then(function() {
        return seedUsers();
    })
    // .then(function() {
    // return seedFood();
    // })
    .then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function(err) {
        console.error(err);
        process.kill(1);
    });