import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: string): Promise<Person> {
    return this.personRepository.findOne({ where: { id:id } });

  }

  async create(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }

  async update(id: string, person: Person): Promise<Person> {
    await this.personRepository.update(id, person);
    return this.personRepository.findOne({ where: { id:id } });
  }

  async delete(id: string): Promise<void> {
    await this.personRepository.delete(id);
  }
}
