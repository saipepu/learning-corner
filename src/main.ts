import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  const config = new DocumentBuilder()
  .setTitle('Learning Corner API Docs')
  .setDescription('The Learning Corner API description')
  .setVersion('1.0')
  .addTag('Learning Corner')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  console.log('Server is running on http://localhost:8080');
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
