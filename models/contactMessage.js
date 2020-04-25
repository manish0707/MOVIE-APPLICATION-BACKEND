const mongoose = require('mongoose');

const contactMessage = new mongoose.Schema({
  firstName : String,
  lastName: String,
  email: String,
  message: String
}, {timestamps: true })

module.exports = mongoose.model("ContactMessage", contactMessage)