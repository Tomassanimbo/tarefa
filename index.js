import express from "express";

const app = express();

const PORT = 3333;


app.get('/', (req, res)=>{
  res.jeson({status:'good'})
});


app.listen(PORT, ()=>console.log('Google foi com exito'));