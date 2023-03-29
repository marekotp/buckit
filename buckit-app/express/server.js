const express = require("express");
const app = express();

const cors = require('cors')

require("dotenv").config();
require("./dbConnect");

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

let subscriptionRoutes = require('./routes/subscriptionRoutes')
app.use(cors())
app.use('/api/subscriptions', subscriptionRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});