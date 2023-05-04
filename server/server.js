import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import router from './routes/workout.js';

//getting enviroment variables
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts/', router);

//db connect
mongoose.connect(MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(PORT, () => {
            console.log(`Connected to DB & Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });