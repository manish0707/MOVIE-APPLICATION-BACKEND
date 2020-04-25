const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title : {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 2000
  },
  releaseDate: {
    type: String,
    required: true,
    maxlength : 32,
    trim: true
  },
  image: {
    type: String,
  },
  popularity : {
    type : Number,
    maxlength: 32,
    required : true
  },
  revenue: {
    type: Number,
    maxlength: 32,
    required: true
  },
  homepage : {
    type: String,
    maxlength : 32
  },
  cast : {
    type: Array,
    default: [],
  },
  crew : {
    type: Array,
    default : []
  }
}, {timestamps: true })

module.exports = mongoose.model("Movie", movieSchema)