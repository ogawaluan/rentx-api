import { getRepository } from 'typeorm';

import { Vehicle } from '../../models';

interface IRequest {
  name?: string;
  brand?: string;
  dailyValue?: number;
}

class UpdateVehicleService {
  static execute = async (
    vehicleId: string,
    updatedVehicle: IRequest
  ): Promise<Vehicle> => {
    const vehicleRepo = getRepository(Vehicle);

    const vehicle = await vehicleRepo.findOneOrFail(vehicleId);

    return vehicleRepo.save({ ...vehicle, ...updatedVehicle });
  };
}

export default UpdateVehicleService;
