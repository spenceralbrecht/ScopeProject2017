import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput, 
  Button, 
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image, 
  Keyboard,
  Platform
} from 'react-native';



export default class NewPollScreen extends Component {
  /*
    Used by our StackNavigator to have a title
    Header is set to null so we don't have a header on top of our search bar
  */
  static navigationOptions = {
    title: 'NewPoll',
    header: null
  };

  /*
    We keep track of and update two variables:
    books - An array of book data
    searchTerm - The title users are searching for
  */
  state = {
    searchTerm: ''
  }

  

  render() {
    return (
      <View style={styles.container}>
          <Text>New Poll</Text>
        <View style={styles.searchView}>
            <Text>Poll Title</Text>
            <TextInput 
              onChangeText={(text) => { 
                this.setState({
                  searchTerm: text
                });
              }}
              value={this.state.searchTerm}
              style={styles.searchTextInput}
            />
            
          
        </View>
        <View style={styles.searchView}>
            <Text>Add Users</Text>
            <TextInput 
              onChangeText={(text) => { 
                this.setState({
                  searchTerm: text
                });
              }}
              value={this.state.searchTerm}
              style={styles.searchTextInput}
            />
            
          
        </View>
        <Button title="Create Poll" onPress={this.searchBooks} color='#FFFFFF' style={styles.searchBtn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    color: 'red',
    flexBasis: '20%',
    backgroundColor: 'blue',
    width: '100%'
  },
  bookList: {
    width: '100%'
  },
  searchView: {
    width: '100%',
    padding: 20,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e74c3c'
  },
  searchTextInput: {
    padding: 10,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    flexBasis: '75%'
  },
  searchBtn: {
    flexBasis: '25%'
  }
});