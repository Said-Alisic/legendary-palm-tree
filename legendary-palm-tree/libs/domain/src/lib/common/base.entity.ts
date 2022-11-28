import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}
