const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  description: {
    type: String,
    require: false,
    trim: true
  },
  size: Number
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
