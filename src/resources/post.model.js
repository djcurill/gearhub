const mongoose = require('mongoose');
const { Schema } = mongoose;

const post = new Schema({
  title: {
    type: String,
  },
  condition: String,
  frameSize: {
    type: String,
    enum: ['S', 'M', 'L', 'XL'],
    message: '{VALUE} is not a supported frame size',
  },
  frontTravel: {
    type: Number,
  },
  rearTravel: {
    type: Number,
  },
  wheelSize: {
    stype: String,
    enum: ['26"', '27" / 650B', '29"'],
  },
  price: Number,
  current: {
    type: String,
    enum: ['CAD', 'USD'],
  },
  postedOn: Date,
  rePostedOn: Date,
  viewCount: Number,
  watchCount: Number,
  description: String,
});

const Post = mongoose.model('post', post);

module.exports = { Post };
