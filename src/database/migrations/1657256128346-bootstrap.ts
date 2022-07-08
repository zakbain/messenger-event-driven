import { MigrationInterface, QueryRunner } from "typeorm";

export class bootstrap1657256128346 implements MigrationInterface {
    name = 'bootstrap1657256128346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" BIGSERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "userName" character varying NOT NULL, "accountStatus" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" BIGSERIAL NOT NULL, "sourceUserId" integer NOT NULL, "destUserId" integer NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
