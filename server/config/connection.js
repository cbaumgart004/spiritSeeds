const mongoose = require("mongoose");

//when deploying, comment out 5-7, and uncomment 9-11

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/spiritseeds"
);

// const db =
//   "mongodb+srv://admin001:KqCDS97LdScuk61h@cluster0.abfz5.mongodb.net/admin001?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(db);

module.exports = mongoose.connection;
