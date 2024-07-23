import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Player } from "./player.model";
import { Clans } from "./clans.model";



export enum ClanMemberRole {
  MASTER  = 'MASTER',
  OFFICER = 'OFFICER',
  SUBOFFICER = 'SUBOFFICER',
  MEMBER = 'MEMBER',
}

@Entity()
export class ClanMember extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Player, (player) => player.clanMembers)
  player: Player;
  
  @ManyToOne(() => Clans, (clans) => clans.clanMembers)
  clan: Clans;
  
  @Column({
    type: 'enum',
    enum: ClanMemberRole,
    default: ClanMemberRole.MEMBER,
  })
  role: ClanMemberRole;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}

