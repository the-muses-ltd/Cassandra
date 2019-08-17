import { gql } from 'apollo-boost'

const getVideo = gql`
  query($id: ID!) {
    video(where: {
      id: $id
    }) {
      id
      title
      externalURL 
    }
  }
`

export default getVideo