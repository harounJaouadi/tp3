import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';

@Module({
  controllers: [SkillController],
  imports : [TypeOrmModule.forFeature([Skill])] ,  
  providers: [SkillService]
})
export class SkillModule {}
