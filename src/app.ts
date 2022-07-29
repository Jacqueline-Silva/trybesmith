import express from 'express';
import productsRoute from './routes/productsRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

export default app;
