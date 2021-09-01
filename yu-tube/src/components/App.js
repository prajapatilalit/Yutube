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

  componentDidMount = () => {
    this.handleSearchSubmit("news");
  };

  handleSearchSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onSubmit={this.handleSearchSubmit} />
          <div className="ui grid">
            <div className="row">
              <div className="ten wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="six wide column">
                <VideoList
                  videos={this.state.videos}
                  onSelectVideo={this.onSelectVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
