import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/practica.controller.js';

dotenv.config()
mongoose.connect(process.env.url_db)

.then(() => {
    console.log("Funciona la base de datos")
})

.catch((error) => {
    console.log("Hubo un error", error)
})

const app = express();
app.use(cors())
app.listen (4000, () => {
    console.log ("Funciona el servidor")
})
test()