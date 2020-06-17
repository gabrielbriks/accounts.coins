import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';
import 'dotenv/config';
import connect from './services/connect';


const app = express();

//RETIRAR 
const db: string = "mongodb://<username>:<password>@mongo.mlab.com:<port>/<database_name>"

connect(`${process.env.MONGO_URI}`);



// mongoose.connect(`${process.env.MONGO_URI}`,{
//   useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useFindAndModify: false,
// });

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3001);