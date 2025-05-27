import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';
import { UserInterface } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserInterface[] = [];

  async create(user: createUserDTO): Promise<UserInterface> {
    const saltOrRounds = 10
    const passHas = await hash(user.password, saltOrRounds)

    const dataResponse:UserInterface = {
      id: this.users.length + 1,
      ...user,
      password: passHas
    };

    this.users.push(dataResponse);
    return dataResponse
  }

  async findAll(): Promise<UserInterface[]>{
    return this.users
  }
}
