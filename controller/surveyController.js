const SurveyModel=require("../models/SureveyModel")


exports.submitSurvey=async(req,res)=>{
    try{
      const {
    Name,
    EducationLevel,
    Skills,
    Gender,
    PhoneNumber,
    Email
    }= req.body;
if (!Name || !PhoneNumber || !Email){
    return res.status(400).json({error:"Name, phone,email is neccesary"})
}

const existing =await SurveyModel.findOne({PhoneNumber})
if(existing){
    return res.status(400).json({err:"Phone already exist"})
}

const newSurvey= new SurveyModel({
        Name,
        EducationLevel,
        Skills,
        Gender,
        PhoneNumber,
        Email
})
await newSurvey.save()
    res.status(201).json({Msg:"Survey has been Submitted Successfully"})
    }catch(err){
        res.status(500).json({err:"Internal Server Error"})
    }
}

exports.listSurvey=async(req,res)=>{
    try{
    const sur=await SurveyModel.find().sort({createdAt:-1})
    res.status(200).json({sur})
    }catch(err){
        res.status(500).json({err:"Internal server Error"})
    }
    }