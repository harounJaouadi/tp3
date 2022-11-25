import { Skill } from "../../skill/entities/skill.entity";
import { User } from "../../user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Cv {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name:string;

    @Column()
    firstname:string;

    @Column()
    age:number;

    @Column({unique: true})
    cin:number;

    @Column()
    password:string;

    @Column()
    job:string;

    @Column()
    path:string;
    
    @ManyToOne(
    ()=>User,
    (user:User)=>user.cvs, ///optional 
    {eager:true}
    )
    user: User;


    @ManyToMany(
        () => Skill,
    )
    @JoinTable({
        name: 'cv_skill',
        joinColumn: {
          name: 'cv',
          referencedColumnName: 'id'
        },
        inverseJoinColumn: {
          name: 'skill',
          referencedColumnName: 'id'
        }
      })
    skills: Skill[] 

}




