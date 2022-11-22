import { NestFactory } from "@nestjs/core"
import { randSkill } from "@ngneat/falso";
import { AppModule } from "../app.module";
import { CvService } from "../cv/cv.service";
import { Skill } from "../skill/entities/skill.entity";
import { SkillService } from "../skill/skill.service";
import { UserService } from "../user/user.service";


export async function bootstrap(){
    const app=await NestFactory.createApplicationContext(AppModule) ; 
    const skillService=app.get(SkillService);
    const cvService=app.get(CvService) ; 
    const userService=app.get(UserService) ; 
    for(let i=0 ; i<50 ; i++) {
        const skill=new Skill();
        skill.designation=randSkill() ;
        await skillService.create(skill) ;
    }
    
    
    
    await app.close() ; 

}

