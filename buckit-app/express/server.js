const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect");

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

let cors = require('cors')
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

let subscriptionRoutes = require('./routes/subscriptionRoutes')
app.use('/api/subscriptions', subscriptionRoutes)

let emailRoutes = require('./routes/emailRoutes')
app.use('/api/email', emailRoutes)

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});