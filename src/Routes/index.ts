import { Router } from 'express';
import CarRoutes from './CarRouter';
import MotorcycleRoutes from './MotorcycleRouter';

const routes = Router();

routes.use(CarRoutes);
routes.use(MotorcycleRoutes);

export default routes;