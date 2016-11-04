'use strict';

import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

var LocationMarker = require('./LocationMarker');
var loc = require('./locationData.json');

var screen = Dimensions.get('window');
var ASPECT_RATIO = screen.width / screen.height;

loc.longitudeDelta = loc.latitudeDelta * ASPECT_RATIO;

class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: loc.latitude,
        longitude: loc.longitude,
        latitudeDelta: loc.latitudeDelta,
        longitudeDelta: loc.longitudeDelta
      }
    };

    this.state.markers = Object.assign([], loc.locations);
  }

  onMarkerPress() {
    return e => {
      var uri = this.state.markers.find(marker =>
        marker.coordinates.latitude === e.nativeEvent.coordinate.latitude
      ).uri;
      Actions.video({uri: uri});
    };
  }

  render() {
    return (
      <MapView 
        style={styles.map}
        initialRegion={this.state.region}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker 
            key={marker.key}
            coordinate={marker.coordinates}
            //onSelect={this.onSelectPress()}
            onPress={this.onMarkerPress()}
          >
            <LocationMarker name={marker.name} />
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 64,
  },
});


module.exports = ShowMap;
