import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Video } from './typeorm-video-entity';

@Entity('Listas')
export class List extends BaseEntity {

    @PrimaryGeneratedColumn()
    lst_id: number;

    @Column({type: "varchar", length: '255'})
    lst_title: string;

    @Column({type: "varchar", length: '255'})
    lst_description: string;

    @Column({type: "varchar", length: '255'})
    lst_youtube_id: string;

    @OneToMany(() => Video, video => video.owner)
    videos: Video[]

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lst_created: Date;

}