import { vehicle_views } from '.';
import { Vehicle } from '../models';
import Specification from '../models/Specification';
import { getUrlImages } from '../utils';

export interface ISpecificationView {
  id: string;
  name: string;
  description: string;
  icon: string;
  vehicle?: Vehicle;
  createdAt: Date;
}

interface ISpecificationRelations {
  withVehicle?: boolean;
}

export const renderOne = (
  specification: Specification,
  { withVehicle }: ISpecificationRelations = {}
): ISpecificationView => {
  const specificationData = {
    id: specification.id,
    name: specification.name,
    description: specification.description,
    icon: specification.icon,
    createdAt: specification.createdAt,
  };

  if (withVehicle) {
    Object.assign(specificationData, {
      vehicle: vehicle_views.renderOne(specification.vehicle),
    });
  }

  return specificationData;
};

export const renderMany = (
  specifications: Specification[],
  relations?: ISpecificationRelations
): ISpecificationView[] => {
  return specifications.map(specification =>
    renderOne(specification, relations)
  );
};
