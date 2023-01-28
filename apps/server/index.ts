import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});

console.log(1);