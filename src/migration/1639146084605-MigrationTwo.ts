import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1639146084605 implements MigrationInterface {
    name = 'Migration1639146084605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Users" DROP COLUMN "usr_hash"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Users" ADD "usr_hash" character varying(255) NOT NULL`);
    }

}
