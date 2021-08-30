import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
  };

  inputHandleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div className="ui fluid action input">
        <input
          onChange={this.inputHandleChange}
          type="text"
          placeholder="Search...."
          value={this.state.searchText}
        />
        <button
          className="ui button"
          onClick={() => this.props.onSubmit(this.state.searchText)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
