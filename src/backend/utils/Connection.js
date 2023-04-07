const mongoose = require("mongoose");
//dotenv to connect the .env key database
const dotenv = require("dotenv");
mongoose.set('strictQuery', false);
dotenv.config();

async function connection() {
  mongoose
    .connect(
        process.env.DB_CONNECT
    )
    .then(() => console.log("Connection to DB succesful"))
    .catch((err) => {
      console.log(err);
    });
}

module.exports.connection = connection;
