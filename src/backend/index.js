const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const cookieParser = require("cookie-parser")
const {connection} = require("./utils/Connection")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const chatRoute = require("./routes/chatRoutes");
const messageRoute = require("./routes/messageRoutes");
const addressRoute = require("./routes/addressRoutes");
const ordersRoute = require("./routes/orderRoutes");

//API
// api/accountRoutes/
const accountRoute = require("./routes/accountRoutes");

//Use routes
app.use("/api/account", accountRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);
app.use("/api/address", addressRoute);
app.use("/api/orders", ordersRoute);

//API Profile Page


app.listen(port, async () => {
    console.log(`Listening at http://localhost:${port}`)
    await connection();
});