import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly SkillRepository : Repository<Skill>){}

  async create(createSkillDto: CreateSkillDto) {
    const {designation} = createSkillDto ;
    try{
      const skillToAdd=new Skill() ; 
      skillToAdd.designation=designation ; 
      const foundedSkill=await this.SkillRepository.findOneBy({designation : designation}) ; 
      if(!foundedSkill){
        await this.SkillRepository.save(skillToAdd) ; 
      }else{
        return {
          warning : "this skill exist"  
        }
      }
       
    }catch(error){
      return {message : error.message}
    }
    
  }

  async findAll() {
    return await this.SkillRepository.find() ; 
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
