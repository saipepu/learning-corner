import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiExtraModels, ApiNotAcceptableResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Course } from './schema/course.schema';
import { Quiz } from './schema/quiz.schema';
import { Sentence } from './schema/sentence.schema';
import { Option } from './schema/option.schema';
import { Query as QueryType } from 'express-serve-static-core';
import { CreateSentenceDto } from './dto/create-sentence.dto';
import { ApiNotSuccessResponseHelper, ApiSuccessResponseHelper } from 'src/helpers/swagger.helper';
import { CreateQuizDto } from './dto/create-quizz.dto';

@ApiExtraModels(Course, Quiz, Sentence, Option, CreateCourseDto, CreateSentenceDto)
@ApiTags('Course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // CREATE COURSE
  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  // ADD SENTENCE
  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post(':id/sentence')
  addSentence(@Param('id') id: string, @Body() sentence: CreateSentenceDto) {
    return this.courseService.addSentence(id, sentence);
  }

  // ADD QUIZ
  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post(':id/quiz')
  addQuiz(@Param('id') id: string, @Body() quiz: CreateQuizDto) {
    return this.courseService.addQuiz(id, quiz);
  }

  @ApiResponse(ApiSuccessResponseHelper(Course.name, 'array'))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get()
  findAll(@Query() query?: QueryType) {
    return this.courseService.findAll(query);
  }

  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne({ _id : id });
  }

  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @ApiResponse(ApiSuccessResponseHelper(Course.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
