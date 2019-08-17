import { gql } from 'apollo-boost'

const getVideo = gql`
  query {
    videos {
      id
      title
      description
      externalURL
    }
  }
`

export default getVideo