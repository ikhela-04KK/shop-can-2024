
import express from "express"; 
import cors from "cors";

const app = express(),
      port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req,res)=>{
    // res.send({message: "we did it! "});
    res.json({
        _id:new Object("784545454828788787878sdsd"),
        email:"kankoffi36@gmail.com",
        password:"********",
        name :"Marc",
        usersTask:[{singleTask:"i'm looking my wife",time: new Date()},{singleTask:"i'm choosing a new choose", time: new Date()}]
    })
});

app.listen(port, ()=>{
    console.log("Backend server live on "+port)
});
