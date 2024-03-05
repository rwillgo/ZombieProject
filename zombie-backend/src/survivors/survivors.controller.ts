import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
//import { CreateSurvivorDto } from './dto/create-survivor.dto';
//import { UpdateSurvivorDto } from './dto/update-survivor.dto';
import { Survivor } from './schemas/survivor.schema';

@Controller('survivors')
export class SurvivorsController {
  constructor(private readonly survivorsService: SurvivorsService) {}

  @Post()
  create(@Body() survivor: Survivor): Promise<Survivor> {
    return this.survivorsService.create(survivor);
  }

  @Get()
  findAll(): Promise<Survivor[]> {
    return this.survivorsService.findAll();
  }

  //not required
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.survivorsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() survivor: Survivor) {
    return this.survivorsService.update(id, survivor);
  }

  //not required
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.survivorsService.remove(+id);
  }
}
