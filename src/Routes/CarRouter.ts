import { Router } from 'express';
import CarController from '../Controllers/CarController';
import URL from '../Utils/Urls';

const routes = Router();

routes.post(
  URL.CARS, 
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  URL.CARS, 
  (req, res, next) => new CarController(req, res, next).getAll(),
);

routes.get(
  URL.CARS_ID, 
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  URL.CARS_ID, 
  (req, res, next) => new CarController(req, res, next).update(),
);

routes.delete(
  URL.CARS_ID, 
  (req, res, next) => new CarController(req, res, next).delete(),
);

export default routes;