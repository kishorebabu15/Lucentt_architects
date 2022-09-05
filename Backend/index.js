require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

// Routes

const clientRoutes = require("./routes/clientRoutes");

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DATABASE connected...!!");
    })
    .catch((error) => { console.log(error) });



// MIDDLEWARES

// Json -> object
app.use(express.json())
// allows to connect API to react
app.use(cors());
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
// app.use(bodyParser());


app.use('/api',clientRoutes);


app.listen(PORT, console.log(`Server is Up and running at ${PORT}`));