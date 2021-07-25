import { gql } from 'apollo-angular';

export namespace PersonCollectionQuery {
  export const PERSONS = gql`
    query {
      persons {
        _id
        name
        email
      }
    }
  `;
}
