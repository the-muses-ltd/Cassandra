---
description: >-
  The following details the structure for data output needed from Cassandra web
  crawlers and spiders for scraping external providers of open educational
  resources.
---

# External Resources Web Crawlers

## External Resources

The structure of the external resource model in our GraphQL database is detailed below:

```bash
type ExternalResource {
  id: ID! @id
  title: String
  description: String
  resourceProvider: String
  linkURL: String
  logoURL: String
  courseLogoURL: String
  Series: [ExternalResource!]! @relation(name: "ResourceSeries")
  categories: [Category!]! @relation(name: "ResourceCategory")
  reviews: [Review!]! @relation(name: "ResourceReview")
  comments: [Comment!]! @relation(name: "ResourceComment")
  votes: [Vote!]! @relation(name: "ResourceVote")
}
```

{% hint style="info" %}
This is just for reference, creation of web crawlers does not require a detailed understanding of GraphQL or the Cassandra Schema. See below for more relevant details.
{% endhint %}



The below structure details the necessary structure of output from web crawlers that is required to be efficiently posted to the Cassandra database:

{% code title="Cassandra WebCrawlers need to output a file with the following structure:" %}
```bash
course 1: 
{
  title: String,
  description: String,
  resourceProvider: String,
  linkURL: String,
  logoURL: String,
  courseLogoURL: String,
  categories: [Array],
  reviews: [Array],
  comments: [Array],
  series: [Array]
},
Course 2:
{
  title: String,
  description: String,
  resourceProvider: String,
  linkURL: String,
  logoURL: String,
  courseLogoURL: String,
  categories: [Array],
  reviews: [Array],
  comments: [Array],
  series: [Array]
},
...
```
{% endcode %}



{% hint style="info" %}
The following are fields that are not required, but are beneficial to be scraped from websites:



```bash
  Series
  categories
  reviews
  comments
```
{% endhint %}

\*\*\*\*

**The following describes each necessary field:**

* title: The title of the course or resource.
* description: Description of the content in the course or details of what is taught in the course.
* resourceProvider: The institution or content creator of the resource.
* linkURL: Link to be redirected to where this course is available \(specific to the course in question, not just the website itself\).
* logoURL: Link to the logo of the institution or provider of this resource.
* courseLogoURL: Logo/cover photo for the specific course \(if not available, can be made to be the logoURL\).
* categories: Subjects and field of study that the course content, e.g. Mathematics.
* reviews: Any reviews of the course that might be publicly available where the course is hosted \(if permitted by terms and conditions of provider\).
* comments: Any comments on the course that might be publicly available where the course is hosted \(if permitted by terms and conditions of provider\).
* series: The set of courses that are related to each other, for example if it is course 1 in a set of 10 courses then an array of each courses in this set can be used to group them together.







