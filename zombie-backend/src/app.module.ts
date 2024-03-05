import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurvivorsModule } from './survivors/survivors.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    SurvivorsModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
