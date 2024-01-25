//const express = require('express');
import express from 'express';
import { animal } from './routes/apiAnimal.js';


const app = express();
const port = 9000;


//middlewares
app.use(express.json());

app.use("/api",animal);


app.listen(port,()=>{
    console.log(`Escucha puerto ${port}`);
});

