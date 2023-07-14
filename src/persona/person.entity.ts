import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Person {
  @ObjectIdColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  telefono: string;

  @Column()
  email: string;
}
