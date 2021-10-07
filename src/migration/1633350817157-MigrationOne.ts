import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationOne1633350817157 implements MigrationInterface {
    name = 'MigrationOne1633350817157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("usr_id" SERIAL NOT NULL, "usr_name" character varying(255) NOT NULL, "usr_email" character varying(255) NOT NULL, "usr_hash" character varying(255) NOT NULL, "usr_created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_60c0edbe672f9dfecd43e8e0a13" PRIMARY KEY ("usr_id"))`);
        await queryRunner.query(`CREATE TABLE "Lists" ("lst_id" SERIAL NOT NULL, "lst_title" character varying(255) NOT NULL, "lst_description" character varying(255) NOT NULL, "lst_youtube_id" character varying(255) NOT NULL, "lst_usr_id" integer NOT NULL, "lst_created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b576440421286da0155630af21e" PRIMARY KEY ("lst_id"))`);
        await queryRunner.query(`CREATE TABLE "Videos" ("vid_id" SERIAL NOT NULL, "vid_title" character varying(255) NOT NULL, "vid_description" character varying(255) NOT NULL, "vid_youtube_id" character varying(255) NOT NULL, "vid_lst_id" integer NOT NULL, "vid_created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_232245cbe0fb357a1098919bb7d" PRIMARY KEY ("vid_id"))`);
        await queryRunner.query(`CREATE TABLE "Annotations" ("ant_id" SERIAL NOT NULL, "ant_videotime" double precision NOT NULL, "ant_text" character varying(255) NOT NULL, "ant_vid_id" integer NOT NULL, "ant_created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_42243e89afe964173f472249e25" PRIMARY KEY ("ant_id"))`);
        await queryRunner.query(`ALTER TABLE "Lists" ADD CONSTRAINT "FK_972e5687211945f8d14859ed652" FOREIGN KEY ("lst_usr_id") REFERENCES "Users"("usr_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "FK_30f1e0fb503359157b262e58f75" FOREIGN KEY ("vid_lst_id") REFERENCES "Lists"("lst_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Annotations" ADD CONSTRAINT "FK_2f5e53f34d3de8de47bea618af6" FOREIGN KEY ("ant_vid_id") REFERENCES "Videos"("vid_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Annotations" DROP CONSTRAINT "FK_2f5e53f34d3de8de47bea618af6"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "FK_30f1e0fb503359157b262e58f75"`);
        await queryRunner.query(`ALTER TABLE "Lists" DROP CONSTRAINT "FK_972e5687211945f8d14859ed652"`);
        await queryRunner.query(`DROP TABLE "Annotations"`);
        await queryRunner.query(`DROP TABLE "Videos"`);
        await queryRunner.query(`DROP TABLE "Lists"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
