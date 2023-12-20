const mongoose = require('mongoose')

const survey=mongoose.Schema({
    Name: { type: String, required: true },
    EducationLevel: { type: String, required: true },
    Skills: [String],
    Gender: { type: String },
    PhoneNumber: { type: String, unique: true },
    Email: { type: String },
  }, { timestamps: true }); 

const SurveyModel=mongoose.model("Survey",survey)

module.exports={
    SurveyModel
}