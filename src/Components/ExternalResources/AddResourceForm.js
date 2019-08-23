import React, { Component } from "react";
import { Mutation } from "react-apollo";

import createExternalResource from "../../Apollo/Mutations/createExternalResource";
import getExternalResources from "../../Apollo/Queries/getExternalResources";

export default class AddResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      linkURL: ""
      // not yet implemented:
      // logoURL: "",
      // categories: []
    };
  }

  render() {
    // TODO: add the rest of the fields (which are required? what to do with the logo?)
    const { title, description, linkURL } = this.state;
    return (
      <form>
        {/* TODO: create reusable input components and refactor */}
        <label>
          Resource name
          <input
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="e.g. Coursera"
          />
        </label>
        <label>
          Resource description
          <input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="e.g. online learning platform that offers massive open online courses, specializations, and degrees."
          />
        </label>
        <label>
          Resource URL
          <input
            value={linkURL}
            onChange={e => this.setState({ linkURL: e.target.value })}
            type="text"
            placeholder="e.g. coursera.org"
          />
        </label>
        <Mutation
          mutation={createExternalResource}
          variables={{ title, description, linkURL }}
          refetchQueries={[{ query: getExternalResources }]}
        >
          {addExternalResource => (
            <button
              type="submit"
              onClick={e => {
                e.preventDefault();
                addExternalResource();
                this.props.closeForm();
              }}
            >
              Submit
            </button>
          )}
        </Mutation>
      </form>
    );
  }
}
