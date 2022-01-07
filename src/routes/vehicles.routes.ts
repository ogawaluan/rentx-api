import { Router } from 'express';
import Joi from 'joi';

import { vehiclesController } from '../controllers';
import { paginationHelper } from '../helpers';
import {
  ensureUserHasAdminRole,
  ensureSameUserOrHasAdminRole,
  validateRouteData,
} from '../middlewares';

const vehiclesRoutes = Router();

vehiclesRoutes.post(
  '/',
  validateRouteData({
    body: Joi.object({
      name: Joi.string().required(),
      brand: Joi.string().required(),
      dailyValue: Joi.number().required(),
      maximumSpeed: Joi.number().required(),
      accelerationTime: Joi.number().required(),
      horsePower: Joi.number().required(),
      peopleCapacity: Joi.number().required(),
    }),
  }),
  vehiclesController.create
);

vehiclesRoutes.get(
  '/',
  validateRouteData({
    query: paginationHelper.paginationJoiObject,
  }),
  vehiclesController.index
);
vehiclesRoutes.get(
  '/:vehicleId',
  validateRouteData({
    params: Joi.object({
      vehicleId: Joi.string().uuid().required(),
    }),
  }),
  vehiclesController.show
);

vehiclesRoutes.put(
  '/:vehicleId',
  validateRouteData({
    params: Joi.object({
      vehicleId: Joi.string().uuid().required(),
    }),
    body: Joi.object({
      name: Joi.string(),
      brand: Joi.string(),
      dailyValue: Joi.number(),
      maximumSpeed: Joi.number().required(),
      accelerationTime: Joi.number().required(),
      horsePower: Joi.number().required(),
      peopleCapacity: Joi.number().required(),
    }),
  }),
  vehiclesController.update
);

vehiclesRoutes.delete(
  '/:vehicleId',
  validateRouteData({
    params: Joi.object({
      vehicleId: Joi.string().uuid().required(),
    }),
  }),
  vehiclesController.delete
);

export default vehiclesRoutes;
