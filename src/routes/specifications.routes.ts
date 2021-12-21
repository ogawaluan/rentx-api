import { Router } from 'express';
import Joi from 'joi';
import multer from 'multer';

import { multerConfig } from '../config/upload';
import { specificationsController } from '../controllers';
import { paginationHelper } from '../helpers';
import {
  ensureUserHasAdminRole,
  ensureSameUserOrHasAdminRole,
  validateRouteData,
} from '../middlewares';

const specificationsRoutes = Router();
const upload = multer(multerConfig);

specificationsRoutes.post(
  '/',
  upload.single('icon'),
  validateRouteData({
    body: Joi.object({
      vehicleId: Joi.string().uuid().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
    }),
  }),
  specificationsController.create
);

specificationsRoutes.get('/', specificationsController.index);

export default specificationsRoutes;
