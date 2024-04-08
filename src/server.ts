import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { connect } from './db/connect';
import { welcomeRouter } from './routes/welcome.routes'

const app = express();
const port = process.env.PORT;

app.use('/', welcomeRouter)

connect();
app.listen(port, () => console.log(`App is listening on port ${port}`))