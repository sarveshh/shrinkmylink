const mongoose = require('mongoose')
const shortId = require('shortid')


const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    create: true,
    default: "https://shrinkmylinks.herokuapp.com/"+shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
},{timestamps: true});

module.exports = mongoose.model('ShortUrl', shortUrlSchema)