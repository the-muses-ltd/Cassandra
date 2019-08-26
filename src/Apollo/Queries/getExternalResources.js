import { gql } from "apollo-boost";

const getExternalResources = gql`
  query {
    externalResources {
      id
      title
      description
      linkURL
      logoURL
      votes {
        positive
      }
    }
  }
`;

export default getExternalResources;
