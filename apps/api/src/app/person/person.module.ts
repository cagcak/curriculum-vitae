import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './models';
import { PersonResolver } from './resolvers';
import { PersonService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [PersonService, PersonResolver],
})
export class PersonModule {}
