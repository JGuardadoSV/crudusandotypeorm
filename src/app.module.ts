import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Person } from './persona/person.entity';
import { PersonController } from './persona/person.controller';
import { PersonService } from './persona/person.service';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://apiagenda:Prueba2023@cluster0.jtmtjg5.mongodb.net/?retryWrites=true&w=majority',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [AppController,PersonController],
  providers: [AppService,PersonService],
})
export class AppModule {}
