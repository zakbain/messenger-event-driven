import { MigrationInterface, QueryRunner } from "typeorm";

export class makeReadAtOptional1657258242432 implements MigrationInterface {
    name = 'makeReadAtOptional1657258242432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "readAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "readAt" SET NOT NULL`);
    }

}
