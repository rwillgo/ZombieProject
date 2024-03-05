import { Injectable } from '@nestjs/common';
//import { CreateSurvivorDto } from './dto/create-survivor.dto';
//import { UpdateSurvivorDto } from './dto/update-survivor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survivor } from './schemas/survivor.schema';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectModel('Survivor') private readonly survivorModel: Model<Survivor>,
  ) {}

  async create(survivor: Survivor) {
    const aSurvivor = new this.survivorModel(survivor);
    return await aSurvivor.save();
  }

  async findAll() {
    return await this.survivorModel.find().exec();
  }

  //not required
  findOne(id: number) {
    return `This action returns a #${id} survivor`;
  }

  async update(id: string, survivor: Survivor) {
    return await this.survivorModel.findByIdAndUpdate(id, survivor, {
      new: true,
    });
  }

  //not required
  remove(id: number) {
    return `This action removes a #${id} survivor`;
  }
}
