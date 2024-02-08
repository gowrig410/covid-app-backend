const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const patientRoute=require("./controller/patientRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowri:gowri123@cluster0.ysfaxj8.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/patient",patientRoute)


app.listen(3002,()=>{
    console.log("Server Running")
})






































