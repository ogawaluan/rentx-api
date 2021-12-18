import { getRepository } from 'typeorm';

import { Vehicle } from '../../models';

interface IRequest {
  name: string;
  brand: string;
  dailyValue: number;
}

class CreateVehicleService {
  static execute = async ({
    name,
    brand,
    dailyValue,
  }: IRequest): Promise<Vehicle> => {
    const vehicleRepo = getRepository(Vehicle);

    const vehicle = vehicleRepo.create({
      name,
      brand,
      dailyValue,
    });

    await vehicleRepo.save(vehicle);

    return vehicle;
  };
}

export default CreateVehicleService;
