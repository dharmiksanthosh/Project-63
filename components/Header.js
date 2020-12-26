import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pocket Dictionary App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: { backgroundColor: 'purple' },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color:'white'
  },
});