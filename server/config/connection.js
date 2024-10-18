const mongoose = require("mongoose");

//when deploying, comment out 5-7, and uncomment 9-11

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/spiritseeds"
);

module.exports = mongoose.connection;
