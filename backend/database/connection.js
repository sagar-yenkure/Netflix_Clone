const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1/Netflix"

const connectToMongo = async () => {
  try {
    await mongoose.connect((URL)
    )
      .then(console.log("connected to mongo succesfully")) // after succesfully connection with mongoDB.
  } catch (err) {
    console.log("the error is created : ", err) // if error haapend this will handle in error.
  }
}
module.exports = connectToMongo;
