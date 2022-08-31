require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ClientModel = require("./models/client")
const cors = require("cors");

const PORT = process.env.PORT || 8000;


// Json -> object
app.use(express.json())
// allows to connect API to react
app.use(cors());

// DATABASE CONNECTION

mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DATABASE connected...!!");
    })
    .catch((error) => { console.log(error) });

app.get('/getClients', (req,res) => {
    ClientModel.find({}, (error,result) => {
        if(error) {
            res.json(error);
        } else {
            res.json(result);
        }
    })
})

app.post("/createClient", async (req,res) => {
    const newClient = new ClientModel(req.body);

    await newClient.save();

    res.json(req.body)
})



app.listen(PORT, console.log(`Server is Up and running at ${PORT}`));