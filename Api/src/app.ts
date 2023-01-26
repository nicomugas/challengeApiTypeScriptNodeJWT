import express, { json } from 'express';
import authRoutes from './routes/auth';
import reportRoutes from './routes/report'
import morgan from 'morgan';

const app = express();

//middelewares
app.use(morgan('dev'));
app.use(express.json())

const validatetoken = require('./middelewares/verifytoken')

//routes

app.use('/auth',authRoutes);
app.use('/report',validatetoken,reportRoutes);

export default app; 