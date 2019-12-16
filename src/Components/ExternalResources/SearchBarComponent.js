import React from "react";

import "./SearchBarComponent.css";

export default class SearchBarComponent extends React.Component {
  state = {
    initialItems: [],
    items: []
  };

  submitHandler(event) {
    event.preventDefault();
  }

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  };

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div class="row">
          {this.state.items.map(function(item) {
            return (
              <div class="column">
                <div class="card">
                  <img
                    src="https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg"
                    alt="Avatar"
                    class="cardImg"
                  ></img>
                  <div key={item} class="container">
                    {item}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
