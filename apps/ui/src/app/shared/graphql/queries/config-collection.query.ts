import { gql } from 'apollo-angular';

export namespace ConfigCollectionQuery {
  export const CONFIGS = gql`
    query {
      configs {
        jobs {
          title
        }
        countries {
          title
        }
        lingos {
          title
        }
        nationalities {
          title
        }
      }
    }
  `;
}
