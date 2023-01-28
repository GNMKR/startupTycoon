import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Listening at port ${PORT}`);
});
