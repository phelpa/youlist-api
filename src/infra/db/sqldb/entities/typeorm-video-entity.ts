import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, BaseEntity } from "typeorm";
import { List } from './typeorm-list-entity';

@Entity('Videos')
export class Video extends BaseEntity {

    @PrimaryGeneratedColumn()
    vid_id: number;

    @Column({type: "varchar", length: '255'})
    vid_title: string;

    @Column({type: "varchar", length: '255'})
    vid_description: string;

    @Column({type: "varchar", length: '255'})
    vid_ytid: string;

    @Column()
    vid_lst_id: number;
    @ManyToOne(() => List, list => list.videos)
    @JoinColumn({ name: "vid_lst_id"})
    owner: List

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    prd_dtcadastro: Date;

    // @OneToMany(() => Annotation, annotation => annotation.owner)
    // annotations: Annotation[]
}