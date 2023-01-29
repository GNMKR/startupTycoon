import bodyParser from 'body-parser';
import express from 'express';
import { globalConfig } from './config';

const { port } = globalConfig.env;

const app = express();
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
