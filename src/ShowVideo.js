'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Video from 'react-native-video';

class ShowVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: 1,                  // 0 is paused, 1 is normal
      volume: 1,                // 0 is muted, 1 is normal
      muted: false,             // Mutes the audio entirely
      paused: false,            // Pauses playback entirely
      repeat: false,            // Repeat forever
      resizeMode: 'contain',    // cover, contain, stretch
      skin: 'custom',           // custom, native, embed
    };

    this.state.marginTop = 64;
  }

  _onLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    var newStyle;

    // Set top margin to 0 in landscape mode and 64 in portrait mode
    // Change video resizeMode
    if (width > height) {
      this.setState({marginTop: 0, resizeMode: 'stretch'});
    } else {
      this.setState({marginTop: 64, resizeMode: 'contain'});
    }

    // hide navbar in landscape mode
    Actions.refresh({hideNavBar: (width > height)});
  }


  render() {
    return (
      <Video
        source={{uri: this.props.uri}}
        rate={this.state.rate}
        volume={this.state.volume}
        muted={this.state.muted}
        resizeMode={this.state.resizeMode}
        repeat={this.state.repeat}
        onError={this.videoError}    // Callback when video cannot be loaded
        style={[styles.video, {marginTop: this.state.marginTop}]}
        onLayout={this._onLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

module.exports = ShowVideo;
