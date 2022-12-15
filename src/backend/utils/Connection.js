const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set('strictQuery', false);
dotenv.config();

async function connection() {
  mongoose
    .connect(
        process.env.DB_CONNECT
    )
    .then(() => console.log("Connection to DB"))
    .catch((err) => {
      console.log(err);
    });
}

module.exports.connection = connection;
