import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateSpecificationsTable1640114230789
  implements MigrationInterface
{
  name = 'CreateSpecificationsTable1640114230789';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`specifications\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`icon\` varchar(255) NOT NULL, \`vehicleId\` char(36) NULL, INDEX \`IDX_d467ee366305ae6364682ef919\` (\`createdAt\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`specifications\` ADD CONSTRAINT \`FK_b2d931c331b9b14c17f1614e1e9\` FOREIGN KEY (\`vehicleId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`specifications\` DROP FOREIGN KEY \`FK_b2d931c331b9b14c17f1614e1e9\``
    );
    await queryRunner.query(`DROP TABLE \`specifications\``);
  }
}
