import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schema/course.schema';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
import { CreateSentenceDto } from './dto/create-sentence.dto';

@Injectable()
export class CourseService {

  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>
  ) {}

  // CREATE COURSE
  async create(createCourseDto: CreateCourseDto) {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  // SET SCRIPT
  async setScript(id: string, script: CreateSentenceDto[]) {
    return await this.courseModel.findByIdAndUpdate(
      id,
      { script },
      { new: true }
    ).populate(['script', 'quizzes']).exec();
  }

  // ADD SENTENCE
  async addSentence(id: string, sentence: CreateSentenceDto) {
    console.log(sentence, 'sentence')
    return await this.courseModel.findByIdAndUpdate(
      id,
      { $push: { script: sentence } },
      { new: true }
    ).populate(['script', 'quizzes']).exec();
  }

  // ADD QUIZ
  async addQuiz(id: string, quiz: any) {
    return await this.courseModel.findByIdAndUpdate(
      id,
      { $push: { quizzes: quiz } },
      { new: true }
    ).populate(['script', 'quizzes']).exec();
  }


  async findAll(query?: Query) : Promise<Course[]> {
    return await this.courseModel.find(query).populate(['script', 'quizzes']).exec();
  }

  async findOne(query?: Query) {
    return await this.courseModel.findOne(query);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true });
  }

  async remove(id: string) {
    return await this.courseModel.findByIdAndDelete(id);
  }
}
