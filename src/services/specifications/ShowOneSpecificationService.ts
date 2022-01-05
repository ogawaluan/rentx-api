import { getRepository } from 'typeorm';

import { Specification } from '../../models';

class ShowOneSpecificationService {
  static execute = async (specificationId: string): Promise<Specification> => {
    const specificationRepo = getRepository(Specification);

    return specificationRepo.findOneOrFail({
      where: { id: specificationId },
      relations: ['vehicle'],
    });
  };
}

export default ShowOneSpecificationService;
