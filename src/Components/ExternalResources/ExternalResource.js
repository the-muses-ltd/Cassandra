import React, { Component } from "react";

export default class ExternalResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    const { collapsed } = this.state;
    const {
      id,
      title,
      description,
      linkURL,
      // logoURL,
      // categories,
      // reviews,
      // comments,
      votes
    } = this.props;

    return (
      <li onClick={this.toggleCollapsed}>
        {/* TODO: replace with a smarter way to add/validate the http prefix */}
        <a href={`https://${linkURL}` || "#"}>{title}</a>
        {collapsed || <p>{description}</p>}
      </li>
    );
  }
}
