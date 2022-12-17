const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const {connection} = require("./utils/Connection")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

const authRoute = require("./routes/authRoutes");
app.use("/api/user", authRoute);

app.get("/", cors(), async (req, res) => {
    res.send('Hello World')
})

app.listen(port, async () => {
    console.log(`Listening at http://localhost:${port}`)
    await connection();
})