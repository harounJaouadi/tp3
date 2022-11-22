import { Cv } from "src/cv/entities/cv.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column() 
    designation : string ; 
    
}
