import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { List } from './typeorm-list-entity';

@Entity('Users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    usr_id: number;

    @Column({type: "varchar", length: '255'})
    usr_name: string;

    @Column({type: "varchar", length: '255'})
    usr_email: string;

    @Column({type: "varchar", length: '255'})
    usr_hash: string;

    @OneToMany(() => List, list => list.owner)
    lists: List[]

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    usr_created: Date;

}