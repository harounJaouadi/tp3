import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import {Skill} from "./skill/entities/skill.entity" ; 
import {Cv} from "./cv/entities/cv.entity" ; 
import {User} from "./user/entities/user.entity" ; 
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [CvModule, UserModule, SkillModule , 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "tp3",
      entities: [Cv,Skill,User],
      synchronize: true,//not in the production 
      // logging : true 

    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
