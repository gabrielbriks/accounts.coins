import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';
import 'dotenv/config';


const app = express();



mongoose.connect(process.env.BD_CONECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3001);