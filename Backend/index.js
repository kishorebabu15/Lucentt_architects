require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// My Routes
const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes");

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
app.use(express.json()) // Json -> object
app.use(cors()); // allows to connect API to react
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(express.urlencoded({extended:true}));


// My Routes
app.use('/api', clientRoutes);
app.use('/api', projectRoutes);

// PORT
const PORT = process.env.PORT || 8000;

// Starting a Server
app.listen(PORT, console.log(`Server is Up and running at ${PORT}`));