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
      logoURL,
      categories,
      reviews,
      comments,
      rating,
      votes
    } = this.props;

    return (
      <div class="card">
        {/* <div class="banner"></div> */}
        <img src={logoURL} className="banner" alt="logo" />
        {/* <div class="menu">
          <div class="opener"><span></span><span></span><span></span></div>
        </div> */}
        <h2 class="name">{title}</h2>
        <div class="title">{categories}</div>
        <div class="actions">
          <div class="follow-info">
            <h2>
              <a href="#">
                <span>{votes ? 0 : votes}</span>
                <small>Votes</small>
              </a>
            </h2>
            <h2>
              <a href="#">
                <span>0</span>
                <small>Rating</small>
              </a>
            </h2>
          </div>
          <div class="follow-btn">
            <button>Details</button>
          </div>
        </div>
        <div class="desc">{description}</div>
      </div>
      // <li onClick={this.toggleCollapsed}>
      //   {/* TODO: replace with a smarter way to add/validate the http prefix */}
      //   <a href={`https://${linkURL}` || "#"}>{title}</a>
      //   {collapsed || <p>{description}</p>}
      // </li>
    );
  }
}
