import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskItem1697174394470 implements MigrationInterface {
  name = 'TaskItem1697174394470';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task"`);
  }
}
