---
description: The backend for Cassandra was created using GraphQL through Prisma.
---

# Schema and Database

To access the playground for testing queries and mutations, or to view the backend documentation, visit the URL address:

```
https://eu1.prisma.sh/tim-dommett/demo/dev
```

{% hint style="info" %}
 This can also be used as the http endpoint for any frontend development. \(This database endpoint is safe for use and to be distributed as no payment information has been included\)
{% endhint %}

The schema design is as follows:

```
type User {
  id: ID! @id
  userName: String!
  email: String
  password: String!
  reviews: [Review!]! @relation(name: "UserReviews")
  comments: [Comment!]! @relation(name: "UserComments")
  votes: [Vote!]! @relation(name: "UserVotes")
}


type Video {
  id: ID! @id
  title: String
  description: String
  externalURL: String
  categories: [Category!]! @relation(name: "VideoCategory")
  reviews: [Review!]! @relation(name: "VideoReview")
  comments: [Comment!]! @relation(name: "VideoComment")
  votes: [Vote!]! @relation(name: "VideoVote")
}

type ExternalResource {
  id: ID! @id
  title: String
  description: String
  linkURL: String
  logoURL: String
  categories: [Category!]! @relation(name: "ResourceCategory")
  reviews: [Review!]! @relation(name: "ResourceReview")
  comments: [Comment!]! @relation(name: "ResourceComment")
  votes: [Vote!]! @relation(name: "ResourceVote")
}

type Review {
  id: ID! @id
  rating: Int!
  review: String!
  user: User @relation(name: "UserReviews")
  externalResource: ExternalResource @relation(name: "ResourceReview")
  video: Video @relation(name: "VideoReview")
}

type Comment {
  id: ID! @id
  comment: String!
  user: User @relation(name: "UserComments")
  externalResource: ExternalResource @relation(name: "ResourceComment")
  video: Video @relation(name: "VideoComment")
}

type Vote {
  id: ID! @id
  positive: Boolean! @default(value: true)
  user: User @relation(name: "UserVotes")
  externalResource: ExternalResource @relation(name: "ResourceVote")
  video: Video @relation(name: "VideoVote")
}

type Category {
  id: ID! @id
  category: String
  video: Video @relation(name: "VideoCategory")
  externalResource: ExternalResource @relation(name: "ResourceCategory")
}




```



