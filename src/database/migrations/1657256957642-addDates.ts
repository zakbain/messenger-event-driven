import { MigrationInterface, QueryRunner } from "typeorm";

export class addDates1657256957642 implements MigrationInterface {
    name = 'addDates1657256957642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message" ADD "readAt" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "readAt"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "createdAt"`);
    }

}
