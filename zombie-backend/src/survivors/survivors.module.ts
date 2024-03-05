import { Module } from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorsController } from './survivors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SurvivorSchema } from './schemas/survivor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Survivor', schema: SurvivorSchema }]),
  ],
  controllers: [SurvivorsController],
  providers: [SurvivorsService],
})
export class SurvivorsModule {}
