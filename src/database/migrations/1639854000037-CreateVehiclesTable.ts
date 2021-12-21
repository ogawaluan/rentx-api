import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateVehiclesTable1639854000037
  implements MigrationInterface
{
  name = 'CreateVehiclesTable1639854000037';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`vehicles\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`brand\` varchar(255) NOT NULL, \`dailyValue\` int NOT NULL, \`deletedAt\` datetime(6) NULL, INDEX \`IDX_d5f17172ea79dbece9fa7c3f0d\` (\`createdAt\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`vehicles\``);
  }
}
