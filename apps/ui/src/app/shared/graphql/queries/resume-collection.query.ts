import { gql } from 'apollo-angular';

export namespace ResumeCollectionQuery {
  /**
   * _id: String
   */
  export const RESUME = gql`
    query($_id: String!) {
      resume(_id: $_id) {
        _id
        employmentHistories {
          city
          employer
          description
          endDate
          jobTitle
          startDate
        }
        courses {
          course
          endDate
          institution
          startDate
        }
        educations {
          city
          degree
          description
          endDate
          school
          startDate
        }
        hobbies {
          text
        }
        languages {
          language
          level
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
        personalDetail {
          address
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
          city
          country
          dateOfBirth
          drivingLicense
          email
          firstName
          lastName
          nationality
          phone
          placeOfBirth
          postalCode
          wantedJobTitle
        }
        professionalSummary {
          text
        }
        references {
          company
          displayStatus
          email
          fullName
          phone
          title
        }
        skills {
          level
          skill
        }
        socialLinks {
          address
          platform
        }
      }
    }
  `;

  /**
   * _id: String
   */
  export const RESUMES = gql`
    query {
      resumes {
        _id
        employmentHistories {
          city
          employer
          description
          endDate
          jobTitle
          startDate
        }
        courses {
          course
          endDate
          institution
          startDate
        }
        educations {
          city
          degree
          description
          endDate
          school
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
          firstName
          lastName
          nationality
          phone
          placeOfBirth
          postalCode
          wantedJobTitle
        }
        professionalSummary {
          text
        }
        references {
          company
          displayStatus
          email
          fullName
          phone
          title
        }
        skills {
          level
          skill
        }
        socialLinks {
          address
          platform
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
}
