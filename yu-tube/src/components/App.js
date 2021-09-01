import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../API/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
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

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onSubmit={this.handleSearchSubmit} />

          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </>
    );
  }
}

export default App;
