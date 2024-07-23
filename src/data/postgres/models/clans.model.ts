import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ClanMember } from "./clanMembers.model";



@Entity()
export class Clans extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ClanMember, (clanMembers) => clanMembers.clan)
  clanMembers: ClanMember[];

  @Column("varchar", {
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 255,
  })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
