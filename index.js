const express=require("express")
const { connection } = require("./db")
const cors=require("cors")
const dotenv=require("dotenv")
const app=express()
const PORT=8080

dotenv.config()
app.use(cors())
app.use(express.json())


const routes=require("./routes/SurveyRoutes")
app.use("/surveys",routes)

app.get("/",(req,res)=>{
    console.log("<h1>this is edstem backend</h1>")
})


app.listen(PORT,async()=>{
    try{
    await connection
    console.log("Server is running on the port 8080")
    }catch(err){
      console.log(err)
    }
})