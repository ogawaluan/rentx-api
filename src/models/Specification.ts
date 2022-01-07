import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Vehicle } from '.';
import BaseModel from './BaseModel';

@Entity('specifications')
class Specification extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @Column()
  vehicleId: string;

  @ManyToOne(() => Vehicle, vehicle => vehicle.specifications)
  @JoinColumn({ name: 'vehicleId' })
  vehicle: Vehicle;
}

export default Specification;
