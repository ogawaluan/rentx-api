import { getRepository } from 'typeorm';

import { Vehicle } from '../../models';

interface IRequest {
  name: string;
  brand: string;
  dailyValue: number;
  maximumSpeed: number;
  accelerationTime: number;
  horsePower: number;
  peopleCapacity: number;
}

class CreateVehicleService {
  static execute = async ({
    name,
    brand,
    dailyValue,
    maximumSpeed,
    accelerationTime,
    horsePower,
    peopleCapacity,
  }: IRequest): Promise<Vehicle> => {
    const vehicleRepo = getRepository(Vehicle);

    const vehicle = vehicleRepo.create({
      name,
      brand,
      dailyValue,
      maximumSpeed,
      accelerationTime,
      horsePower,
      peopleCapacity,
    });

    await vehicleRepo.save(vehicle);

    return vehicle;
  };
}

export default CreateVehicleService;
