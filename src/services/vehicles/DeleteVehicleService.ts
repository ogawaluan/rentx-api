import { getRepository } from 'typeorm';

import { Vehicle } from '../../models';

class DeleteVehicleService {
  static execute = async (vehicleId: string): Promise<void> => {
    const vehicleRepo = getRepository(Vehicle);

    await vehicleRepo.softDelete(vehicleId);
  };
}

export default DeleteVehicleService;
