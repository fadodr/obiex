import express from 'express';
const app = express();

import routes from './routes';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

export default app;