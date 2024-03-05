import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Survivor {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  lastLocation: string;

  @Prop()
  inventory: [];

  @Prop()
  isInfected: boolean;
}

export const SurvivorSchema = SchemaFactory.createForClass(Survivor);
