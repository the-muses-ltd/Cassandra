import { gql } from "apollo-boost";

const createExternalResource = gql`
  mutation($title: String!, $description: String!, $linkURL: String!) {
    createExternalResource(
      data: { title: $title, description: $description, linkURL: $linkURL }
    ) {
      id
      title
      description
      linkURL
    }
  }
`;

export default createExternalResource;
