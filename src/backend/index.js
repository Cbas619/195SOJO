const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const cookieParser = require("cookie-parser")
const {connection} = require("./utils/Connection")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(port, async () => {
    console.log(`Listening at http://localhost:${port}`)
    await connection();
})