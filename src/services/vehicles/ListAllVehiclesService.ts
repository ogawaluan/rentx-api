import { getRepository } from 'typeorm';

import {
  IQueryFilters,
  paginateIt,
  PaginationObject,
} from '../../helpers/pagination';
import { Vehicle } from '../../models';

class ListAllVehiclesService {
  static execute = async (
    filters: IQueryFilters
  ): Promise<PaginationObject> => {
    const vehicleRepo = getRepository(Vehicle);

    return paginateIt({
      filters,
      tableName: 'vehicles',
      query: vehicleRepo.createQueryBuilder('vehicles'),
    });
  };
}

export default ListAllVehiclesService;
