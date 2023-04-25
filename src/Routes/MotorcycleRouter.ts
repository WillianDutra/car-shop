import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/motorcycle', (req, res, next) => new MotorcycleController(req, res, next).create());

export default routes;