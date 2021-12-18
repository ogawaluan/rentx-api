import { RequestHandler, Response } from 'express';

import {
  CreateVehicleService,
  DeleteVehicleService,
  ListAllVehiclesService,
  ShowOneVehicleService,
  UpdateVehicleService,
} from '../services/vehicles';
import { vehicle_views, pagination_views } from '../views';

class VehiclesController {
  create: RequestHandler = async (request, response): Promise<Response> => {
    const vehicle = await CreateVehicleService.execute(request.body);
    return response.status(201).json(vehicle_views.renderOne(vehicle));
  };

  index: RequestHandler = async (request, response): Promise<Response> => {
    const paginatedVehicles = await ListAllVehiclesService.execute(
      request.query
    );

    return response
      .status(200)
      .json(
        pagination_views.render(
          paginatedVehicles,
          vehicle_views.renderMany(paginatedVehicles.data)
        )
      );
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { vehicleId } = request.params;

    const vehicle = await ShowOneVehicleService.execute(vehicleId);

    return response.status(200).json(vehicle_views.renderOne(vehicle));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { vehicleId } = request.params;

    const updatedVehicle = await UpdateVehicleService.execute(
      vehicleId,
      request.body
    );

    return response.status(200).json(vehicle_views.renderOne(updatedVehicle));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { vehicleId } = request.params;

    await DeleteVehicleService.execute(vehicleId);

    return response.status(204).send();
  };
}

export default VehiclesController;
