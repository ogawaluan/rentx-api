import { RequestHandler, Response } from 'express';

import {
  CreateSpecificationService,
  DeleteSpecificationService,
  ListAllSpecificationsService,
  ShowOneSpecificationService,
  UpdateSpecificationService,
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

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { specificationId } = request.params;

    const specification = await ShowOneSpecificationService.execute(
      specificationId
    );

    return response
      .status(200)
      .json(
        specification_views.renderOne(specification, { withVehicle: true })
      );
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { specificationId } = request.params;

    const specification = await UpdateSpecificationService.execute(
      specificationId,
      { icon: request.file, ...request.body }
    );

    return response
      .status(200)
      .json(
        specification_views.renderOne(specification, { withVehicle: true })
      );
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { specificationId } = request.params;

    await DeleteSpecificationService.execute(specificationId);

    return response.status(200).send();
  };
}

export default SpecificationController;
