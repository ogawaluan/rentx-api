import { RequestHandler, Response } from 'express';

import {
  CreateSpecificationService,
  ListAllSpecificationsService,
} from '../services/specifications';
import { specification_views } from '../views';

class SpecificationController {
  create: RequestHandler = async (request, response): Promise<Response> => {
    const specification = await CreateSpecificationService.execute({
      icon: request.file,
      ...request.body,
    });

    return response
      .status(201)
      .json(specification_views.renderOne(specification));
  };

  index: RequestHandler = async (request, response): Promise<Response> => {
    const specifications = await ListAllSpecificationsService.execute();

    return response
      .status(200)
      .json(
        specification_views.renderMany(specifications, { withVehicle: true })
      );
  };
}

export default SpecificationController;
