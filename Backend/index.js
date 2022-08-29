require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

// DATABASE CONNECTION

mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DATABASE connected...!!");
    })
    .catch((error) => { console.log(error) });

    
app.listen(PORT, console.log(`Server is Up and running at ${PORT}`));
