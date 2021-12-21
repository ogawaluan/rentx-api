import { Column, DeleteDateColumn, Entity } from 'typeorm';

import BaseModel from './BaseModel';

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
}

export default Vehicle;
