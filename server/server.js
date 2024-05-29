const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const userModel=require("./models/user")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
app.post("/signup",(req,res)=>{
    userModel.create(req.body)
    .then(newUser => res.json(newUser)).catch(err=>res.json(err))

})
app.post("/login",(req,res)=>{
    const {email,password} =req.body
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json({
                    name:user.username,
                    status:"success"
                })
            }
            else{
                res.json("password incorrect")
            }
        }
        else{
            res.json("no record found")
        }
    })

})
app.listen(3001,()=>{
    console.log("server is running")
})