import { Common } from './common.model';
import { CreateAndUpdateResumeInput } from './resume-collection.model';

export type CreatePersonInput = Partial<{
  address: Common.AddressInput;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}>;

export interface Person {
  __typename?: 'Person';
  _id: Common.Scalars['String'];
  address?: Common.Maybe<Common.AddressInput>;
  email?: Common.Maybe<Common.Scalars['String']>;
  name?: Common.Maybe<Common.Scalars['String']>;
  phone?: Common.Maybe<Common.Scalars['String']>;
  resumes: Array<CreateAndUpdateResumeInput>;
  username?: Common.Maybe<Common.Scalars['String']>;
  website?: Common.Maybe<Common.Scalars['String']>;
}

export interface PersonsResponse {
  persons: Person[];
}

// export type Maybe<T> = T | null
// export type Exact<T extends { [key: string]: unknown }> = {
//   [K in keyof T]: T[K]
// }
// /** All built-in and custom scalars, mapped to their actual values */

// export type Address = {
//   __typename?: "Address"
//   city?: Maybe<Scalars["String"]>
//   geo?: Maybe<Geo>
//   street?: Maybe<Scalars["String"]>
//   suite?: Maybe<Scalars["String"]>
//   zipcode?: Maybe<Scalars["String"]>
// }

// export type AddressInput = {
//   city?: Maybe<Scalars["String"]>
//   geo?: Maybe<GeoInput>
//   street?: Maybe<Scalars["String"]>
//   suite?: Maybe<Scalars["String"]>
//   zipcode?: Maybe<Scalars["String"]>
// }

// export type Course = {
//   __typename?: "Course"
//   course?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   institution?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type CourseInput = {
//   course?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   institution?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type CreateAndUpdateResumeInput = {
//   courses?: Maybe<Array<Maybe<CourseInput>>>
//   customSections?: Maybe<Array<Maybe<CustomSectionInput>>>
//   educations?: Maybe<Array<Maybe<EducationInput>>>
//   employmentHistories?: Maybe<Array<Maybe<EmploymentHistoryInput>>>
//   hobbies?: Maybe<Array<Maybe<HobbieInput>>>
//   languages?: Maybe<Array<Maybe<LanguageInput>>>
//   organizations?: Maybe<Array<Maybe<OrganizationInput>>>
//   personalDetail?: Maybe<PersonalDetailInput>
//   professionalSummary?: Maybe<ProfessionalSummaryInput>
//   publications?: Maybe<Array<Maybe<PublicationInput>>>
//   references?: Maybe<Array<Maybe<ReferenceInput>>>
//   skills?: Maybe<Array<Maybe<SkillInput>>>
//   socialLinks?: Maybe<Array<Maybe<SocialLinkInput>>>
// }

// export type CreatePersonInput = {
//   address?: Maybe<AddressInput>
//   email: Scalars["String"]
//   name: Scalars["String"]
//   phone?: Maybe<Scalars["String"]>
//   username: Scalars["String"]
//   website?: Maybe<Scalars["String"]>
// }

// export type CustomSection = {
//   __typename?: "CustomSection"
//   text?: Maybe<Scalars["String"]>
// }

// export type CustomSectionInput = {
//   text?: Maybe<Scalars["String"]>
// }

// export type Education = {
//   __typename?: "Education"
//   city?: Maybe<Scalars["String"]>
//   degree?: Maybe<Scalars["String"]>
//   description?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   school?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type EducationInput = {
//   city?: Maybe<Scalars["String"]>
//   degree?: Maybe<Scalars["String"]>
//   description?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   school?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type EmploymentHistory = {
//   __typename?: "EmploymentHistory"
//   city?: Maybe<Scalars["String"]>
//   description?: Maybe<Scalars["String"]>
//   employer?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   jobTitle?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type EmploymentHistoryInput = {
//   city?: Maybe<Scalars["String"]>
//   description?: Maybe<Scalars["String"]>
//   employer?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   jobTitle?: Maybe<Scalars["String"]>
//   startDate?: Maybe<Scalars["String"]>
// }

// export type Geo = {
//   __typename?: "Geo"
//   lat?: Maybe<Scalars["String"]>
//   lng?: Maybe<Scalars["String"]>
// }

// export type GeoInput = {
//   lat?: Maybe<Scalars["String"]>
//   lng?: Maybe<Scalars["String"]>
// }

// export type Hobbie = {
//   __typename?: "Hobbie"
//   text?: Maybe<Scalars["String"]>
// }

// export type HobbieInput = {
//   text?: Maybe<Scalars["String"]>
// }

// export type Language = {
//   __typename?: "Language"
//   language?: Maybe<Scalars["String"]>
//   level?: Maybe<Scalars["Int"]>
// }

// export type LanguageInput = {
//   language?: Maybe<Scalars["String"]>
//   level?: Maybe<Scalars["Int"]>
// }

// export type ListPersonInput = {
//   _id?: Maybe<Scalars["String"]>
//   address?: Maybe<AddressInput>
//   email?: Maybe<Scalars["String"]>
//   name?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   username?: Maybe<Scalars["String"]>
//   website?: Maybe<Scalars["String"]>
// }

// export type ListResumesInput = {
//   _id: Scalars["String"]
//   personalDetail?: Maybe<PersonalDetailInput>
//   professionalSummary?: Maybe<ProfessionalSummaryInput>
// }

// export type Mutation = {
//   __typename?: "Mutation"
//   bulkDeletePersons?: Maybe<Scalars["Boolean"]>
//   bulkDeleteResumes?: Maybe<Scalars["Boolean"]>
//   createPerson: Person
//   createResume: Resume
//   deleteAllResumes?: Maybe<Scalars["Boolean"]>
//   deletePerson: Person
//   deleteResume: Resume
//   updatePerson: Person
//   updateResume: Resume
// }

// export type MutationBulkDeletePersonsArgs = {
//   _ids: Array<Scalars["String"]>
// }

// export type MutationBulkDeleteResumesArgs = {
//   _ids: Array<Scalars["String"]>
// }

// export type MutationCreatePersonArgs = {
//   payload: CreatePersonInput
// }

// export type MutationCreateResumeArgs = {
//   payload: CreateAndUpdateResumeInput
// }

// export type MutationDeletePersonArgs = {
//   _id: Scalars["String"]
// }

// export type MutationDeleteResumeArgs = {
//   _id: Scalars["String"]
// }

// export type MutationUpdatePersonArgs = {
//   payload: UpdatePersonInput
// }

// export type MutationUpdateResumeArgs = {
//   _id: Scalars["String"]
//   payload: CreateAndUpdateResumeInput
// }

// export type Organization = {
//   __typename?: "Organization"
//   description?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   name?: Maybe<Scalars["String"]>
//   tstartDateext?: Maybe<Scalars["String"]>
// }

// export type OrganizationInput = {
//   description?: Maybe<Scalars["String"]>
//   endDate?: Maybe<Scalars["String"]>
//   name?: Maybe<Scalars["String"]>
//   tstartDateext?: Maybe<Scalars["String"]>
// }

// export type Person = {
//   __typename?: "Person"
//   _id: Scalars["String"]
//   address?: Maybe<Address>
//   email?: Maybe<Scalars["String"]>
//   name?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   resumes: Array<Resume>
//   username?: Maybe<Scalars["String"]>
//   website?: Maybe<Scalars["String"]>
// }

// export type PersonResumesArgs = {
//   populate: Scalars["Boolean"]
// }

// export type PersonalDetail = {
//   __typename?: "PersonalDetail"
//   address?: Maybe<Scalars["String"]>
//   city?: Maybe<Scalars["String"]>
//   country?: Maybe<Scalars["String"]>
//   dateOfBirth?: Maybe<Scalars["String"]>
//   drivingLicense?: Maybe<Scalars["String"]>
//   email?: Maybe<Scalars["String"]>
//   firstName?: Maybe<Scalars["String"]>
//   lastName?: Maybe<Scalars["String"]>
//   nationality?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   placeOfBirth?: Maybe<Scalars["String"]>
//   postalCode?: Maybe<Scalars["String"]>
//   wantedJobTitle?: Maybe<Scalars["String"]>
// }

// export type PersonalDetailInput = {
//   address?: Maybe<Scalars["String"]>
//   city?: Maybe<Scalars["String"]>
//   country?: Maybe<Scalars["String"]>
//   dateOfBirth?: Maybe<Scalars["String"]>
//   drivingLicense?: Maybe<Scalars["String"]>
//   email?: Maybe<Scalars["String"]>
//   firstName?: Maybe<Scalars["String"]>
//   lastName?: Maybe<Scalars["String"]>
//   nationality?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   placeOfBirth?: Maybe<Scalars["String"]>
//   postalCode?: Maybe<Scalars["String"]>
//   wantedJobTitle?: Maybe<Scalars["String"]>
// }

// export type ProfessionalSummary = {
//   __typename?: "ProfessionalSummary"
//   text?: Maybe<Scalars["String"]>
// }

// export type ProfessionalSummaryInput = {
//   text?: Maybe<Scalars["String"]>
// }

// export type Publication = {
//   __typename?: "Publication"
//   platform?: Maybe<Scalars["String"]>
//   publishDate?: Maybe<Scalars["String"]>
//   title?: Maybe<Scalars["String"]>
// }

// export type PublicationInput = {
//   platform?: Maybe<Scalars["String"]>
//   publishDate?: Maybe<Scalars["String"]>
//   title?: Maybe<Scalars["String"]>
// }

// export type Query = {
//   __typename?: "Query"
//   person: Person
//   persons: Array<Person>
//   resume: Resume
//   resumes: Array<Resume>
// }

// export type QueryPersonArgs = {
//   _id: Scalars["String"]
// }

// export type QueryPersonsArgs = {
//   filters?: Maybe<ListPersonInput>
// }

// export type QueryResumeArgs = {
//   _id: Scalars["String"]
// }

// export type QueryResumesArgs = {
//   filters?: Maybe<ListResumesInput>
// }

// export type Reference = {
//   __typename?: "Reference"
//   company?: Maybe<Scalars["String"]>
//   displayStatus?: Maybe<Scalars["String"]>
//   email?: Maybe<Scalars["String"]>
//   fullName?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   title?: Maybe<Scalars["String"]>
// }

// export type ReferenceInput = {
//   company?: Maybe<Scalars["String"]>
//   displayStatus?: Maybe<Scalars["String"]>
//   email?: Maybe<Scalars["String"]>
//   fullName?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   title?: Maybe<Scalars["String"]>
// }

// export type Resume = {
//   __typename?: "Resume"
//   _id: Scalars["String"]
//   courses?: Maybe<Array<Course>>
//   customSections?: Maybe<Array<CustomSection>>
//   educations?: Maybe<Array<Education>>
//   employmentHistories: Array<EmploymentHistory>
//   hobbies?: Maybe<Array<Hobbie>>
//   languages?: Maybe<Array<Language>>
//   organizations?: Maybe<Array<Organization>>
//   personalDetail: PersonalDetail
//   professionalSummary?: Maybe<ProfessionalSummary>
//   publications?: Maybe<Array<Publication>>
//   references?: Maybe<Array<Reference>>
//   skills?: Maybe<Array<Skill>>
//   socialLinks?: Maybe<Array<SocialLink>>
// }

// export type Skill = {
//   __typename?: "Skill"
//   level?: Maybe<Scalars["Int"]>
//   skill?: Maybe<Scalars["String"]>
// }

// export type SkillInput = {
//   level?: Maybe<Scalars["Int"]>
//   skill?: Maybe<Scalars["String"]>
// }

// export type SocialLink = {
//   __typename?: "SocialLink"
//   address?: Maybe<Scalars["String"]>
//   platform?: Maybe<Scalars["String"]>
// }

// export type SocialLinkInput = {
//   address?: Maybe<Scalars["String"]>
//   platform?: Maybe<Scalars["String"]>
// }

// export type UpdatePersonInput = {
//   _id: Scalars["String"]
//   address?: Maybe<AddressInput>
//   email?: Maybe<Scalars["String"]>
//   name?: Maybe<Scalars["String"]>
//   phone?: Maybe<Scalars["String"]>
//   username?: Maybe<Scalars["String"]>
//   website?: Maybe<Scalars["String"]>
// }
