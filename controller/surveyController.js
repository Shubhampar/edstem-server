const {SurveyModel}=require("../models/SureveyModel")


exports.submitSurvey = async (req, res) => {
  try {
    const {
      Name,
      EducationLevel,
      Skills,
      Gender,
      PhoneNumber,
      Email
    } = req.body;

    if (!Name || !PhoneNumber || !Email) {
      return res.status(400).json({ error: "Name, phone, and email are necessary" });
    }

    const existing = await SurveyModel.findOne({ PhoneNumber });

    if (existing) {
      return res.status(400).json({ err: "Phone already exists" });
    }

    const newSurvey = new SurveyModel({
      Name,
      EducationLevel,
      Skills,
      Gender,
      PhoneNumber,
      Email
    });

    await newSurvey.save();
    res.status(201).json({ Msg: "Survey has been Submitted Successfully" });
  } catch (error) {
    console.error("Error submitting survey:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.listSurvey = async (req, res) => {
  try {
    const surveys = await SurveyModel.find().sort({ createdAt: -1 });
    res.status(200).json({ surveys });
  } catch (err) {
    console.error("Error listing surveys:", err.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};