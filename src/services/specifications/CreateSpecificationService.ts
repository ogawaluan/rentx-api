import { getRepository } from 'typeorm';

import { Specification } from '../../models';

interface IRequest {
  vehicleId: string;
  name: string;
  description: string;
  icon: Express.Multer.File;
}

class CreateSpecificationService {
  static execute = async ({
    vehicleId,
    name,
    description,
    icon,
  }: IRequest): Promise<Specification> => {
    const specificationRepo = getRepository(Specification);

    const specification = specificationRepo.create({
      vehicleId,
      name,
      description,
      icon: icon.filename,
    });

    await specificationRepo.save(specification);

    return specification;
  };
}

export default CreateSpecificationService;
