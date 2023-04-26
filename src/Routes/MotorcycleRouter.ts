import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import URL from '../Utils/Urls';

const routes = Router();

routes.post(
  URL.MOTORCYCLE, 
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  URL.MOTORCYCLE, 
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routes.get(
  URL.MOTORCYCLE_ID,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

routes.put(
  URL.MOTORCYCLE_ID, 
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.delete(
  URL.MOTORCYCLE_ID, 
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default routes;