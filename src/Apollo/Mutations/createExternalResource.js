import { gql } from "apollo-boost";

const createExternalResource = gql`
  mutation($title: String!, $description: String!) {
    createExternalResource(data: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export default createExternalResource;
