import { getRepository } from 'typeorm';

import { jwtHelper, passwordsHelper } from '../../helpers';
import { User } from '../../models';
import { AppError } from '../../utils';
import { AppErrorType } from '../../utils/translations';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  private static async getUserByEmail(email: string): Promise<User> {
    const usersRepo = getRepository(User);

    const user = await usersRepo.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'image', 'password', 'createdAt'],
      relations: ['role'],
    });

    if (!user) {
      throw new AppError({
        type: AppErrorType.WRONG_EMAIL_PASSWORD,
        statusCode: 401,
      });
    }

    return user;
  }

  private static async validatePassword(
    email: string,
    password: string
  ): Promise<User> {
    const usersRepo: any = getRepository(User);
    const user = await AuthenticateUserService.getUserByEmail(email);

    const isPasswordsEqual = await passwordsHelper.compareHashs(
      user.password,
      password
    );

    if (!isPasswordsEqual) {
      throw new AppError({
        type: AppErrorType.WRONG_EMAIL_PASSWORD,
        statusCode: 401,
      });
    }

    if (isPasswordsEqual) {
      await usersRepo.save({
        ...user,
      });
    } else {
      await usersRepo.save({
        ...user,
        password: user.password,
      });
    }

    return user;
  }

  static execute = async ({
    email,
    password,
  }: IRequest): Promise<IResponse> => {
    const user = await AuthenticateUserService.validatePassword(
      email,
      password
    );

    return {
      user,
      token: jwtHelper.generateToken(user.id, user.role.name),
    };
  };
}

export default AuthenticateUserService;
