import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userServices:UserService){}

    @Get()
    async findAll(){
        return this.userServices.findAll()
    }

    @Post()
    async create(@Body() createdUser: createUserDTO){
       return this.userServices.create(createdUser)
    }
}
