import { gql } from 'apollo-angular';

export namespace ResumeCollectionMutation {
  /**
   * payload: CreatePersonInput
   */
  export const CREATE_PERSON = gql`
    mutation($payload: CreatePersonInput!) {
      createPerson(payload: $payload) {
        _id
        address {
          city
          geo {
            lat
            lng
          }
          street
          suite
          zipcode
        }
        hobbies(populate: $populate) {
          name
        }
        email
        name
        phone
        username
        website
      }
    }
  `;
}
