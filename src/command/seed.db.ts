import { NestFactory } from '@nestjs/core';
import {
  rand,
  randEmail,
  randFirstName,
  randFullName,
  randJobTitle,
  randJobType,
  randLastName,
  randNumber,
  randPassword,
  randSkill,
} from '@ngneat/falso';
import { SkillService } from '../skill/skill.service';

import { CvService } from '../cv/cv.service';
import { UserService } from '../user/user.service';
import { AppModule } from '../app.module';
import { Skill } from '../skill/entities/skill.entity';
import { Cv } from '../cv/entities/cv.entity';
import { User } from '../user/entities/user.entity';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('test');
  const skillService = app.get(SkillService);
  const cvService = app.get(CvService);
  const userService = app.get(UserService);

  for (let i = 0; i < 50; i++) {
    const skill = new Skill();
    skill.designation = randSkill();

    await skillService.create(skill);
  }
  const skillTable = await skillService.findAll();
  //seed cvs
  for (let i = 0; i < 10; i++) {
    const cv = new Cv();
    cv.name = randLastName();
    cv.firstname = randFirstName();
    cv.age = randNumber({ min: 10, max: 80 });
    cv.cin = randNumber({ max: 99999999 });
    cv.password = randPassword();
    cv.job = randJobTitle();
    cv.path = randJobType();
    const numberOfskills = getRandomInt(4);
    for (let i = 1; i <= numberOfskills; i++) {
      const alea = getRandomInt(30);
      cv.skills[0] = skillTable[alea];
      cv.skills[1] = skillTable[alea + 1];
      cv.skills[2] = skillTable[alea + 2];
    }
    await cvService.createforSeed(cv);
  }
  ///cv has  10 skills ***
  ///user has rand3 skills
  const cvTable = await cvService.findAll();
  for (let i = 0; i < 12; i++) {
    const user = new User();
    user.username = randFullName();
    user.email = randEmail({ lastName: user.username.split(' ')[0] });
    user.password = randPassword();
    const numberOfcvs = getRandomInt(4);
    for (let i = 1; i <= numberOfcvs; i++) {
      const alea = getRandomInt(5);
      user.cvs[0] = cvTable[alea];
      user.cvs[1] = cvTable[alea + 1];
      user.cvs[2] = cvTable[alea + 2];
    }
    await userService.createforSeed(user);
  }

  await app.close();
}
bootstrap();
