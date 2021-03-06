import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: ""
    };
  }

  render() {
    return (
      <div>
        <h1 class="aboutTitle">Cassandra</h1>
        <h2 class="aboutHeader">About Cassandra</h2>
        <p class="aboutParagraph">
          The Cassandra project is being created by The Muses non-profit
          organisation with the intention of distributing educational resources
          openly without financial costs to students. This is with the aim of
          equal opportunity to education for all.
        </p>

        <h2 class="aboutHeader">About The Muses</h2>
        <p class="aboutParagraph">
          The Muses is a non-profit organisation that is aimed at addressing the
          economic barriers to education and the resulting socio-economic
          problems that arise when there are financial restrictions to
          education. We are registered in the United Kingdom, but we work with
          volunteer developers from all over the world. Our organisation has a
          legally binding fiduciary responsibility to only provide social
          welfare and is prohibited from generating an income for any directors
          or managers, so we are donating our time just like everyone else. We
          are running various different projects at different stages, which are
          all attempting to tackle different facets of these educational
          barriers. Our utopian education system is one where everyone has
          access to the educational resourses and educational institutions are
          purely there for hands on guiding of students through the learning
          process, not institutions that horde their information and restrict it
          to the elite and wealthy.
        </p>
      </div>
    );
  }
}

export default About;
