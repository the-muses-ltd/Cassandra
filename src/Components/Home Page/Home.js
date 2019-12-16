import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.redirect = this.redirect.bind(this);
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  redirect() {
    const thing = this.state.search;
    this.props.history.push({
      pathname: "/resources",
      state: { category: thing }
    });
  }

  render() {
    const { search } = this.state;
    return (
      <header className="App-header">
        {/* <img src="https://gdurl.com/LBGp" className="App-logo" alt="logo" /> */}

        <h1 className="landingTitle">Cassandra</h1>

        <p className="landingPara">
          Everyone deserves equal access to education, get your access here.
        </p>
        <form onSubmit={this.redirect}>
          <input
            label="Search home"
            placeholder="Search for free courses here..."
            icon="search"
            className="home-search-field"
            onChange={this.update("search")}
          ></input>
        </form>
        <img src="https://gdurl.com/FxCL" className="heroLogo" alt="logo" />
      </header>
    );
  }
}

export default Home;
