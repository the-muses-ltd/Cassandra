import React, { Component } from "react";

export default class ExternalResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  render() {
    const {
      id,
      title,
      description,
      linkURL,
      logoURL,
      categories,
      reviews,
      comments,
      votes
    } = this.props;

    return <li>{title}</li>;
  }
}
