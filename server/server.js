import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

//getting enviroment variables
const PORT = process.env.PORT;

//express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("hello world");
});

//listen for requests
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});