import { getRepository } from 'typeorm';

import { Specification } from '../../models';

interface IRequest {
  name?: string;
  description?: string;
  icon?: Express.Multer.File;
}

class UpdateSpecificationService {
  static execute = async (
    specificationId: string,
    { icon, ...updatedSpecification }: IRequest
  ): Promise<Specification> => {
    const specificationRepo = getRepository(Specification);

    const specification = await specificationRepo.findOneOrFail({
      where: { id: specificationId },
      relations: ['vehicle'],
    });

    return specificationRepo.save({
      ...specification,
      icon: icon?.filename,
      ...updatedSpecification,
    });
  };
}

export default UpdateSpecificationService;
