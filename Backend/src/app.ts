import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import {api as userRoutes} from "./router/User"
import bodyParser from 'body-parser';
dotenv.config()

const app = express();


const port = process.env.PORT || 3000;
const mongo_url = process.env.MONGO_URL;


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Configure Header HTTP
// ....
// Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const start = async () => {
    const connect = await mongoose.connect(
        mongo_url,
     );
    if (connect){
        app.use(`/api/v1`, userRoutes);
        app.listen(port,  async () => {
            console.log(`Express is listening at http://localhost:${port}`);
        });
        
    }
}

start();