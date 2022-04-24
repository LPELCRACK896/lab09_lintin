import React, { Component } from 'react'
import song from "./audio_files/megalovania.mp3"
export default class Audio extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false
  };
  playPause = ()=>{
    let isPlaying = this.state.isPlaying;
    this.state.audio.isPlaying?pause():play()
    this.setState({ isPlaying: !isPlaying });
  }
  render() {
    return (
      <div>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>
        Play | Pause
        </button>
      </div>
    )
  }
}
