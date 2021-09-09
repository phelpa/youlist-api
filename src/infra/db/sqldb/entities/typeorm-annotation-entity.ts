import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Video } from './typeorm-video-entity'

@Entity('Annotations')
export class Annotation extends BaseEntity {

    @PrimaryGeneratedColumn()
    ant_id: number;

    @Column({type: "integer"})
    ant_videotime: number;

    @Column({type: "varchar", length: '255'})
    ant_text: string;

    @Column()
    ant_vid_id: number;
    @ManyToOne(() => Video, video => video.annotations)
    @JoinColumn({ name: "ant_vid_id"})
    owner: Video

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    ant_created: Date;
}