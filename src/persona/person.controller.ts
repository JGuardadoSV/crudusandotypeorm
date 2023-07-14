import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Person> {
    return this.personService.findOne(id);
  }

  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return this.personService.create(person);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() person: Person): Promise<Person> {
    return this.personService.update(id, person);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.personService.delete(id);
  }
}
