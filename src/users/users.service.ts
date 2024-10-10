import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const users: Users = new Users();
    users.name = createUserDto.name;
    users.email = createUserDto.email;
    users.password = createUserDto.password;
    users.gender = createUserDto.gender;
    return this.userRepository.save(users);
    // return 'This action adds a new user';
  }

  findAll() {
    return this.userRepository.find();
    // return `This action returns all users`;
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
    // return `This action returns a #${id} user`;
  }
  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: Users = new Users();
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
    // return `This action updates a #${id} user`;
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
    // return `This action removes a #${id} user`;
  }
}
