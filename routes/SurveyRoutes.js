
const express=require("express")
const router = express.Router();
const surveyController = require('../controller/surveyController');

router.post('/submit', surveyController.submitSurvey);
router.get('/list', surveyController.listSurvey);

module.exports = router;