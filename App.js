import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NewPollScreen from './NewPollScreen';
import RestaurantDetail from './RestaurantDetail';
import RestaurantList from './RestaurantList';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => {navigate('NewPoll'); console.log("hi");}}
          title="New Poll"
        />
        <Button
          onPress={() => {navigate('RestaurantDetail'); console.log("hello");}}
          title="RestaurantDetail"
        />
        <Button
          onPress={() => {navigate('RestaurantList'); console.log("lsdkfj");}}
          title="RestaurantList"
        />
      </View>
    );
  }
}

// class ChatScreen extends React.Component {
//   // Nav options can be defined as a function of the screen's props:
//   static navigationOptions = ({ navigation }) => ({
//     title: `Chat with ${navigation.state.params.user}`,
//   });
//   render() {
//     // The screen's current route is passed in to `props.navigation.state`:
//     const { params } = this.props.navigation.state;
//     return (
//       <View>
//         <Text>Chat with {params.user}</Text>
//       </View>
//     );
//   }
// }

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  NewPoll: { screen: NewPollScreen },
  RestaurantDetail: { screen: RestaurantDetail },
  RestaurantList: { screen: RestaurantList },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
