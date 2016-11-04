'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, View, BackAndroid } from 'react-native';
import { Scene, Reducer, Router, Modal, Actions } from 'react-native-router-flux';

var ShowMap = require('./ShowMap');
var ShowVideo = require('./ShowVideo');

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
    Actions.pop();
    return true;
  } catch (err) {
    //console.log("Cannot pop. Exiting the app...");
    return false;
  }
});

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    //console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

class App extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="modal" component={Modal}>
          <Scene key="root">
            <Scene key="home" component={ShowMap} title="Home" initial={true} duration={1}/>
            <Scene key="video" component={ShowVideo} title="Live Cam" duration={1}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('KoreaSurfCam', () => App);
