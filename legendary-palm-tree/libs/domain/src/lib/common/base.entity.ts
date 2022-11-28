import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}