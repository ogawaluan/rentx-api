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

  @Column()
  maximumSpeed: number;

  @Column({ precision: 3, scale: 1 })
  accelerationTime: number;

  @Column()
  horsePower: number;

  @Column()
  peopleCapacity: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Specification, specification => specification.vehicle)
  specifications: Specification[];
}

export default Vehicle;
