import { gql } from 'apollo-angular';

export namespace PersonCollectionMutation {
  /**
   * payload: CreateAndUpdateResumeInput
   */
  export const CREATE_RESUME = gql`
    mutation($payload: CreateAndUpdateResumeInput!) {
      createResume(payload: $payload) {
        _id
        courses {
          course
          endDate
          institution
          startDate
        }
        customSections {
          text
        }
        educations {
          city
          degree
          description
          endDate
          school
          startDate
        }
        employmentHistories {
          city
          description
          employer
          endDate
          jobTitle
          startDate
        }
        hobbies {
          text
        }
        languages {
          language
          level
        }
        personalDetail {
          address
          city
          country
          dateOfBirth
          drivingLicense
          email
          placeOfBirth
          firstName
          lastName
          wantedJobTitle
          postalCode
          phone
          nationality
        }
        professionalSummary {
          text
        }
        socialLinks {
          address
          platform
        }
        skills {
          level
          skill
        }
        references {
          company
          displayStatus
          email
          fullName
          phone
          title
        }
        customSections {
          title
          items {
            city
            description
            endDate
            startDate
            title
          }
        }
      }
    }
  `;

  /**
   * _id: String
   * payload: CreateAndUpdateResumeInput
   */
  export const UPDATE_RESUME = gql`
    mutation($_id: String!, $payload: CreateAndUpdateResumeInput!) {
      updateResume(_id: $_id, payload: $payload) {
        _id
        courses {
          course
          endDate
          institution
          startDate
        }
        customSections {
          title
          items {
            city
            description
            endDate
            startDate
            title
          }
        }
        educations {
          city
          degree
          description
          endDate
          school
          startDate
        }
        employmentHistories {
          city
          description
          employer
          endDate
          jobTitle
          startDate
        }
        hobbies {
          text
        }
        languages {
          language
          level
        }
        personalDetail {
          address
          city
          avatar {
            blank
            mediumUrl
            originalUrl
            thumbUrl
            transform {
              angle
              rect {
                h
                w
                x
                y
              }
              zoom
            }
          }
          country
          dateOfBirth
          drivingLicense
          email
          placeOfBirth
          firstName
          lastName
          wantedJobTitle
          postalCode
          phone
          nationality
        }
        professionalSummary {
          text
        }
        socialLinks {
          address
          platform
        }
        skills {
          level
          skill
        }
        references {
          company
          displayStatus
          email
          fullName
          phone
          title
        }
      }
    }
  `;

  /**
   * payload: uploadFile
   * cannot be DocumentNode
   */
  export const UPLOAD_FILE = `mutation uploadFile($file: Upload!, $id: String!) {\\n  uploadFile(file: $file, id: $id) {\\n    mediumUrl\\n    originalUrl\\n    thumbUrl\\n    success\\n  }\\n}\\n`;
}
