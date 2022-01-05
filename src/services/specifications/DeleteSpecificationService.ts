import { getRepository } from 'typeorm';

import { Specification } from '../../models';

class DeleteSpecificationService {
  static execute = async (specificationId: string): Promise<void> => {
    const specificationRepo = getRepository(Specification);

    await specificationRepo.delete(specificationId);
  };
}

export default DeleteSpecificationService;
