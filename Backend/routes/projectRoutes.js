const express = require("express")
const router = express.Router()

const { createProject, getProjectDetails, updateProjectDetails } = require("../controllers/projectRoutes")

router.post('/createProject', createProject)
router.get('/getProjectDetails', getProjectDetails)
router.post('/updateProjectDetails', updateProjectDetails)

module.exports = router