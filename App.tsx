/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FlexLayoutPage } from './src/features/flexlayout/FlexLayoutPage';
import { LoginPage } from './src/features/login/LoginPage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

interface State {

}

export interface Props {

}

class HomeScreen extends React.Component<State,Props> {

  constructor(props: Props) {
    super(props);
    
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title="Go to flexlayout"
          onPress={() => this.props.navigation.navigate('FlexLayout')}
        />
        <Button
          title="Login Page"
          onPress={() => this.props.navigation.navigate('LoginPage')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

});
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    FlexLayout: FlexLayoutPage,
    LoginPage : LoginPage
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);
