var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

const {createClient, getClients,  updateClientDetails } = require("../controllers/clientRoutes")

router.post('/createClient', [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("phone", "Must be a 10 didgit number").isLength(10),
], createClient)

router.get('/getClients', getClients)

router.post('/updateClientDetails', updateClientDetails)


module.exports = router