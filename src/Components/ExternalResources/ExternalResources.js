import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";

import ExternalResource from "./ExternalResource";
import getExternalResources from "../../Apollo/Queries/getExternalResources";
import createExternalResource from "../../Apollo/Mutations/createExternalResource";
import AddResourceForm from "./AddResourceForm";
import SearchBarComponent from "./SearchBarComponent";

import "./ExternalResources.css";

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
    const sampleData = ["sample1", "sample2", "sample3", "sample4"];
    return (
      <div>
        <h1>External Resources</h1>
        <p>
          Search here to find courses to start learning for your new career or
          to improve your skills at your current job. Vote for any recources you
          think have value and post any courses you have found to help others
          know what could help them get to that next stage of their careers.
        </p>

        <SearchBarComponent content={sampleData} />

        {/* TODO: hide add button for unauthenticated users */}
        <button onClick={this.toggleAddResourceForm}>
          {this.state.addResourceFormOpen ? "x" : "+"}
        </button>
        {this.state.addResourceFormOpen && (
          <AddResourceForm closeForm={this.toggleAddResourceForm} />
        )}
        <Query query={getExternalResources}>
          {/* TODO: add error handling */}
          {({ data, loading, refetch }) => {
            return (
              <div>
                {loading && "Loading..."}
                <ul>
                  {data && data.externalResources
                    ? data.externalResources.map(resource => (
                        <ExternalResource {...resource} key={resource.id} />
                      ))
                    : "No results"}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
