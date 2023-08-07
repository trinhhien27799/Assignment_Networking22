var mongoose = require('mongoose');
var express = require('express');
var app = express();

const carModel = new mongoose.Schema({
    name: String,
    price: String,
    year: String,
})

const carObject = mongoose.model('CarObj', carModel, 'car');
module.exports = carObject;