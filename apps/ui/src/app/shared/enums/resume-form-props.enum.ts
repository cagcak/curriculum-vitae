export namespace ResumeFormProps {
  export enum PersonalDetail {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    EMAIL = 'email',
    PHONE = 'phone',
    DATE_OF_BIRTH = 'dateOfBirth',
    WANTED_JOB_TITLE = 'wantedJobTitle',
    NATIONALITY = 'nationality',
    CITY = 'city',
    COUNTRY = 'country',
    PLACE_OF_BIRTH = 'placeOfBirth',
    ADDRESS = 'address',
    AVATAR = 'avatar',
    POSTAL_CODE = 'postalCode',
    DRIVING_LICENSE = 'drivingLicense',
  }

  export enum Avatar {
    BLANK = 'blank',
    MEDIUM_URL = 'mediumUrl',
    ORIGINAL_URL = 'originalUrl',
    THUMB_URL = 'thumbUrl',
  }

  export enum AvatarTransform {
    ANGLE = 'angle',
    RECT = 'rect',
    ZOOM = 'zoom',
  }

  export enum AvatarTransformRect {
    H = 'h',
    W = 'w',
    X = 'x',
    Y = 'y',
  }

  export enum ProfessionalSummary {
    TEXT = 'text',
  }

  export enum Courses {
    COURSE = 'course',
    END_DATE = 'endDate',
    INSTITUTION = 'institution',
    START_DATE = 'startDate',
  }

  export enum EmploymentHistory {
    CITY = 'city',
    DESCRIPTION = 'description',
    EMPLOYER = 'employer',
    END_DATE = 'endDate',
    JOB_TITLE = 'jobTitle',
    START_DATE = 'startDate',
  }

  export enum CustomSections {
    TITLE = 'title',
    ITEMS = 'items',
  }

  export enum Section {
    TITLE = 'title',
    DESCRIPTION = 'description',
    CITY = 'city',
    START_DATE = 'startDate',
    END_DATE = 'endDate',
  }

  export enum Educations {
    CITY = 'city',
    DEGREE = 'degree',
    DESCRIPTION = 'description',
    END_DATE = 'endDate',
    SCHOOL = 'school',
    START_DATE = 'startDate',
  }

  export enum Hobbies {
    TEXT = 'text',
  }

  export enum Languages {
    LANGUAGE = 'language',
    LEVEL = 'level',
  }

  export enum References {
    COMPANY = 'company',
    DISPLAY_STATUS = 'displayStatus',
    EMAIL = 'email',
    FULL_NAME = 'fullName',
    PHONE = 'phone',
    TITLE = 'title',
  }

  export enum Skills {
    SKILL = 'skill',
    LEVEL = 'level',
  }

  export enum SocialLinks {
    ADDRESS = 'address',
    PLATFORM = 'platform',
  }
}
