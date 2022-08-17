import express from 'express';
import carRouter from './routes/Car';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;
