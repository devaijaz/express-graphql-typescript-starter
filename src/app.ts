import express from 'express';
import validateEnv from './configurations/validate-env';
import indexRoute  from './routes/index-route';
import apiRoute from './routes/api-router';
import useragent from 'express-useragent';

const app = express();
app.use(useragent.express());

//validare the required environment variables
const env = validateEnv();


app.use("/", indexRoute);
app.use("/api", apiRoute);


export default app;

