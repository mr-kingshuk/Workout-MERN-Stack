import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});