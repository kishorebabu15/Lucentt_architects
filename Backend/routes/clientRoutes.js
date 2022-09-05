const express = require("express");
const router = express.Router();

const { getClients, createClient } = require("../controllers/clientRoutes")

router.post('/createClient',createClient);
router.get('/getClients',getClients);

module.exports = router ;