import express, { Router, Request, Response } from 'express'
import {connectDB} from "./src/db/service/util-service";
import "dotenv/config";
import UserRoleModel from './src/db/models/userRole-model';
import UserModel from './src/db/models/user-model';
import LectureType from './src/db/models/lectureType-model';
import Lecture from './src/db/models/lecture-model';
import MemberRoleModel from './src/db/models/memberRole-model';
import MemberModel from './src/db/models/member-model';

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const app = express();

const getRouter = require('./src/routes/get-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

//cors Option
const corsOptions = {
    origin: 'http://localhost:3000', // this should match your frontend's origin
    credentials: true, // this allows the backend to accept cookies from the frontend
}

app.use(cors(corsOptions));
app.use('/vitamins', getRouter);

async function startApp() {
    await connectDB();
    app.listen(8080, () => {
      console.log('App now listening for requests on port 8080');
    });
}

startApp();
