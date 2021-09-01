import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
  };

  inputHandleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  inputFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div className="item">
          <label>YuTube</label>
        </div>

        <form onSubmit={this.inputFormSubmit} className="ui fluid action input">
          <input
            onChange={this.inputHandleChange}
            type="text"
            placeholder="Search...."
            value={this.state.searchText}
          />
          <button className="ui button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
