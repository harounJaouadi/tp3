import { NestFactory } from "@nestjs/core";
import { randSkill } from "@ngneat/falso";
import { Skill } from "src/skill/entities/skill.entity";
import { SkillService } from "src/skill/skill.service";
import { AppModule } from "../app.module";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const skillService = app.get(SkillService);
  for (let i=0; i < 50; i++) {
    const skill = new Skill();
    skill.designation = randSkill();
    await skillService.create(skill);
  }
  await app.close();
}


bootstrap();