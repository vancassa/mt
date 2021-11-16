import React, { Component } from "react";
import video from "./angular-project.mkv";


class Video extends Component {
  render() {
    return (
      <div className="video">
        <video width="100%" autoPlay muted loop src={video} />
      </div> 
    );
  }
}

export default Video;