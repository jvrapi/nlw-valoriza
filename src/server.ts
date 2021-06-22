import 'reflect-metadata'
import express from 'express';
import './database';
import { router as UserRoutes } from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/users', UserRoutes);

app.listen(3000, () => console.log('Server is running'));
