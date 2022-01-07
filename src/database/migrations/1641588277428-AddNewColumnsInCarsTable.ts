import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddNewColumnsInCarsTable1641588277428
  implements MigrationInterface
{
  name = 'AddNewColumnsInCarsTable1641588277428';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` ADD \`maximumSpeed\` int NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` ADD \`accelerationTime\` DECIMAL(3,1) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` ADD \`horsePower\` int NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` ADD \`peopleCapacity\` int NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` DROP COLUMN \`peopleCapacity\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` DROP COLUMN \`horsePower\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` DROP COLUMN \`accelerationTime\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicles\` DROP COLUMN \`maximumSpeed\``
    );
  }
}
