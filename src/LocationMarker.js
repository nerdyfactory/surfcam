var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;

var LocationMarker = React.createClass({
  getDefaultProps() {
    return {
      fontSize: 10,
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <Text style={[styles.loc, { fontSize: this.props.fontSize }]}>{this.props.name}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    //backgroundColor: '#FF5A5F',
    backgroundColor: '#008080',
    padding: 2,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  loc: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    //borderTopColor: '#FF5A5F',
    borderTopColor: '#008080',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    //borderTopColor: '#D23F44',
    borderTopColor: '#008080',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

module.exports = LocationMarker;
