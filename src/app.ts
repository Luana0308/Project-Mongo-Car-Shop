import express from 'express';
import carRouter from './routes/Car';

const app = express();
app.use(express.json());
app.use(carRouter);

export default app;
