import { getRepository } from 'typeorm';

import { Specification } from '../../models';

class ListAllSpecificationsService {
  static execute = async (): Promise<Specification[]> => {
    const specificationRepo = getRepository(Specification);

    const specifications = await specificationRepo.find({
      relations: ['vehicle'],
    });

    return specifications;
  };
}

export default ListAllSpecificationsService;
