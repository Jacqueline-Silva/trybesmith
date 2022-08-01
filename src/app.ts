import express from 'express';
import ordersRoute from './routes/ordersRoutes';
import productsRoute from './routes/productsRoutes';
import usersRoute from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', usersRoute);

app.use('/orders', ordersRoute);

export default app;
