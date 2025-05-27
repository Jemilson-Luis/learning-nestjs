import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';

@Controller('user')
export class UserController {
    @Get()
    async findAll(){
        return 'All users'
    }

    @Post()
    async create(@Body() createdUser: createUserDTO){
        return createdUser
    }
}
