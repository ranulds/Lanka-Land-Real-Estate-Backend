const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InquirySchema = new Schema({
  firstname: {
    type: String,
    // required: true
  },
  lastname: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  subject: {
    type: String,
    // required: true
  },
  message: {
    type: String,
    // required: true
  }
});

module.exports = Inquiry = mongoose.model("inquiries", InquirySchema);