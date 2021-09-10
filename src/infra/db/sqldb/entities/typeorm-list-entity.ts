import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Video } from './typeorm-video-entity';
import { User } from './typeorm-user-entity';

@Entity('Lists')
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

  @Column()
  lst_usr_id: number;
  @ManyToOne(() => User, user => user.lists)
  @JoinColumn({ name: "lst_usr_id"})
  owner: User

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lst_created: Date;

}