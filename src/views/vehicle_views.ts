import Vehicle from '../models/Vehicle';

export interface IVehicleView {
  id: string;
  name: string;
  brand: string;
  dailyValue: number;
  createdAt: Date;
}

export const renderOne = (vehicle: Vehicle): IVehicleView => ({
  id: vehicle.id,
  name: vehicle.name,
  brand: vehicle.brand,
  dailyValue: vehicle.dailyValue,
  createdAt: vehicle.createdAt,
});

export const renderMany = (vehicles: Vehicle[]): IVehicleView[] => {
  return vehicles.map(vehicle => renderOne(vehicle));
};
