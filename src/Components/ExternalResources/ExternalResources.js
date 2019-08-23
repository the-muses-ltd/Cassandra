import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";

// import ExternalResource from "./ExternalResource";
import getExternalResources from "../../Apollo/Queries/getExternalResources";
import createExternalResource from "../../Apollo/Mutations/createExternalResource";
import AddResourceForm from "./AddResourceForm";

export default class ExternalResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addResourceFormOpen: false
    };
  }
  toggleAddResourceForm = () => {
    this.setState(prevState => ({
      addResourceFormOpen: !prevState.addResourceFormOpen
    }));
  };

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

        <button onClick={this.toggleAddResourceForm}>
          {this.state.addResourceFormOpen ? "x" : "+"}
        </button>
        {this.state.addResourceFormOpen && (
          <AddResourceForm closeForm={this.toggleAddResourceForm} />
        )}
        <Query query={getExternalResources}>
          {({ data, loading, error }) => {
            console.log(data, loading, error);
            return (
              <ul>
                {/* {this.props.resources &&
                  this.props.resources.map(resource => (
                    <ExternalResource {...resource} />
                  ))} */}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}
