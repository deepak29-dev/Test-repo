import express from "express";
const app = express(t)
const port =3000;

app.get("/" , (req , res) =>{
    res.end(`Hello from backend`)
})

app.listen(port , ()=>{
    console.log(`app is running at port ${port}`);
    
})


