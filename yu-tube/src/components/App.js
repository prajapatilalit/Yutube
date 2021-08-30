import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../API/YouTube";

class App extends Component {
  state = {
    videos: [],
  };

  handleSearchSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onSubmit={this.handleSearchSubmit} />i have{" "}
          {this.state.videos.length} videos
        </div>
      </>
    );
  }
}

export default App;
