import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';

import BaseModel from './BaseModel';
import Specification from './Specification';

@Entity('vehicles')
class Vehicle extends BaseModel {
  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  dailyValue: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Specification, specification => specification.vehicle)
  specifications: Specification[];
}

export default Vehicle;
