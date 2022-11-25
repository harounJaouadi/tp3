import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
    private readonly cvRepository: Repository<Cv>,
  ) {}

  async create(createCvDto: CreateCvDto) {
    try {
      const { name, firstname, age, cin, password, job, path } = createCvDto;
      const cv = new Cv();
      cv.name = name;
      cv.firstname = firstname;
      cv.age = age;
      cv.cin = cin;
      cv.password = password;
      cv.job = job;
      cv.path = path;
      await this.cvRepository.save(cv) ; 
    } catch (error) {
      return { message: error.message };
    }
  }

  async createforSeed(cv:Cv){
    return await this.cvRepository.save(cv) ;
  }  

  async findAll() {
    try {
      return await this.cvRepository.find();
    } catch (error) {
      return { message: error.message };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
