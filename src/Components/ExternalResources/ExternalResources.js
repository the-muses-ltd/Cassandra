import React, { Component } from "react";
import ExternalResource from "./ExternalResource";

class ExternalResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: ""
    };
  }

  render() {
    return (
      <div>
        <h1>External Resources</h1>
        <p>
          Search here to find courses to start learning for your new career or
          to improve your skills at your current job. Vote for any recources you
          think have value and post any courses you have found to help others
          know what could help them get to that next stage of their careers.
        </p>
        <button>+</button>
        <ul>
          {this.props.resources.map(resource => (
            <ExternalResource {...resource} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Recources;
