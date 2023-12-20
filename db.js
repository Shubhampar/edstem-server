const mongoose=require("mongoose")

require("dotenv").config()

const mongoURL = process.env.MONGO_URI; 

const connection = mongoose.connect(mongoURL);


module.exports = connection
