import { Router } from 'express';
import CarRoutes from './CarRouter';

const routes = Router();

routes.use(CarRoutes);

export default routes;