
import express from "express"; 
import cors from "cors";

const app = express(),
      port = process.env.PORT || 5000;

app.use(cors());
app.get("/home", (req,res)=>{
    // res.send({message: "we did it! "});
    res.json({
        name :"Marc",
        age :99
    })
});

app.listen(port, ()=>{
    console.log("Backend server live on "+port)
});
