import { Common } from './common.model';

export type Config = Partial<
  {
    _id: string;
    countries: Country[];
    jobs: Job[];
    lingos: Lingo[];
    nationalities: Nationality[];
  } & Common.FieldType<'Config'>
>;

export type CreateConfigInput = Partial<
  {
    countries: Country[];
    jobs: Job[];
    lingos: Lingo[];
    nationalities: Nationality[];
  } & Common.FieldType<'Config'>
>;

export type Nationality = Partial<Common.FieldTitle & Common.FieldType<'Nationality'>>;

export type City = Partial<Common.FieldTitle & Common.FieldType<'City'>>;

export type Job = Partial<Common.FieldTitle & Common.FieldType<'Job'>>;

export type Lingo = Partial<Common.FieldTitle & Common.FieldType<'Lingo'>>;

export type Country = Partial<{ cities: City[] } & Common.FieldTitle & Common.FieldType<'Country'>>;

export interface ConfigResponse {
  configs: CreateConfigInput;
}
