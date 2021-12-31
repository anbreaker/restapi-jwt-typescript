import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Initializations
const app = express();

// Routes
import authRoutes from './routes/authJwt.routes';

app.use(authRoutes);

//middlewares
// comunications with other servers
app.use(cors());

// sms servers develops
app.use(morgan('dev'));

// format json to object
app.use(json());

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', authRoutes);

export default app;
