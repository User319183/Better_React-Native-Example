import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component{
  displayAlert(){
    alert("Test Alert");
  }
  render(){
    return(
       <Button title={this.props.myTitle} color="red" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
       <RedButton myTitle="This is a title"/>
      <Text>My React component</Text>
      </View>
    );
  }
}
