import * as React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);