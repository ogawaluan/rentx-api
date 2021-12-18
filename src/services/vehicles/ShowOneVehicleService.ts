import { getRepository } from 'typeorm';

import { Vehicle } from '../../models';

class ShowOneVehicleService {
  static execute = async (vehicleId: string): Promise<Vehicle> => {
    const vehicleRepo = getRepository(Vehicle);

    return vehicleRepo.findOneOrFail(vehicleId);
  };
}

export default ShowOneVehicleService;
