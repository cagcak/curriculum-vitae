import { DocumentNode } from 'graphql';
import { Picked } from '../../models';
import { Common } from './common.model';

export type CreateAndUpdateResumeInput = Partial<
  {
    courses: CourseInput[];
    customSections: CustomSectionInput[];
    educations: EducationInput[];
    employmentHistories: EmploymentHistoryInput[];
    hobbies: HobbieInput[];
    languages: LanguageInput[];
    personalDetail: PersonalDetailInput;
    professionalSummary: ProfessionalSummaryInput;
    references: ReferenceInput[];
    skills: SkillInput[];
    socialLinks: SocialLinkInput[];
  } & Common.FieldId &
    Common.FieldType
>;

export interface ResumeResponse {
  resume: CreateAndUpdateResumeInput;
}

export interface ResumesResponse {
  resumes: CreateAndUpdateResumeInput[];
}

export type ResumeFormValue = Picked<ResumeResponse, 'resume'>;

export type CourseInput = Partial<{
  course: string;
  endDate: string;
  institution: string;
  startDate: string;
}> &
  Common.FieldType;

export type CustomSectionInput = Partial<{
  title: string;
  items: SectionInput[];
}> &
  Common.FieldType;

export type EducationInput = Partial<{
  city: string;
  degree: string;
  description: string;
  endDate: string;
  school: string;
  startDate: string;
}> &
  Common.FieldType;

export type EmploymentHistoryInput = Partial<{
  city: string;
  description: string;
  employer: string;
  endDate: string;
  jobTitle: string;
  startDate: string;
}> &
  Common.FieldType;

export type HobbieInput = Common.FieldText & Common.FieldType;

export type LanguageInput = Partial<{
  language: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}> &
  Common.FieldType;

export type PersonalDetailInput = Partial<{
  address: string;
  avatar: Avatar;
  city: string;
  country: string;
  dateOfBirth: string;
  drivingLicense: string;
  email: string;
  firstName: string;
  lastName: string;
  nationality: string;
  phone: string;
  placeOfBirth: string;
  postalCode: string;
  wantedJobTitle: string;
}> &
  Common.FieldType;

export type ProfessionalSummaryInput = Common.FieldText & Common.FieldType;

export type ReferenceInput = Partial<{
  company: string;
  displayStatus: string;
  email: string;
  fullName: string;
  phone: string;
  title: string;
}> &
  Common.FieldType;

export type SkillInput = Partial<{
  skill: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}> &
  Common.FieldType;

export type SocialLinkInput = Partial<{
  address: string;
  platform: string;
}> &
  Common.FieldType;

export type SectionInput = Partial<{
  title: string;
  description: string;
  city: string;
  startDate: string;
  endDate: string;
}> &
  Common.FieldType;

export type Avatar = Partial<
  {
    blank: boolean;
    mediumUrl: string;
    originalUrl: string;
    thumbUrl: string;
    transform: AvatarTransform;
  } & Common.FieldType<'Avatar'>
>;

export type AvatarTransform = Partial<
  {
    angle: number;
    rect: AvatarTransformRect;
    zoom: number;
  } & Common.FieldType<'AvatarTransform'>
>;

export type AvatarTransformRect = Partial<
  {
    h: number;
    w: number;
    x: number;
    y: number;
  } & Common.FieldType<'AvatarTransformRect'>
>;

interface Variables {
  file: unknown;
  id: string;
}

interface UploadFile {
  uploadFile: Omit<Avatar, 'blank' | 'transform' | '__typename'> & { success: boolean };
}

export type UploadFileResponse = {
  data: UploadFile;
};

export interface UploadFileRequest {
  operationName: 'uploadFile';
  variables: Variables;
  query: DocumentNode | string;
}

export interface UploadFileRequestVariables {
  map: { '0': ['variables.file'] };
}
