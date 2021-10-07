import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity
} from 'typeorm'
import { List } from './typeorm-list-entity'
import { Annotation } from './typeorm-annotation-entity'

@Entity('Videos')
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  vid_id: number

  @Column({ type: 'varchar', length: '255' })
  vid_title: string

  @Column({ type: 'varchar', length: '255' })
  vid_description: string

  @Column({ type: 'varchar', length: '255' })
  vid_youtube_id: string

  @Column()
  vid_lst_id: number
  @ManyToOne(() => List, (list) => list.videos)
  @JoinColumn({ name: 'vid_lst_id' })
  owner: List

  @OneToMany(() => Annotation, (annotation) => annotation.owner)
  annotations: Annotation[]

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  vid_created: Date
}
