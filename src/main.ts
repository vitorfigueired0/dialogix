import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { printAscii } from './util/ascii';

async function main() {
  printAscii()

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Dialogix')
    .setDescription('')
    .setVersion('1.0')
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000); 
}

main();
