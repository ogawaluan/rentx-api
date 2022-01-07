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
specificationsRoutes.get('/:specificationId', specificationsController.show);

specificationsRoutes.put(
  '/:specificationId',
  upload.single('icon'),
  specificationsController.update
);

specificationsRoutes.delete(
  '/:specificationId',
  specificationsController.delete
);

export default specificationsRoutes;
