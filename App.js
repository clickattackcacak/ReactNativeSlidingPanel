import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
}

export default class MyComponent extends React.Component {
  state = {
    visible: false
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: "white", width: 100, height: 40, justifyContent: "center", alignSelf: "center", borderWidth: 3, borderColor: "#4CAF50", borderRadius: 5 }} onPress={() => this.setState({ visible: true })}>
          <Text style={{ alignSelf: "center", color: "#4CAF50" }}>Show panel</Text>
        </TouchableOpacity>
        <SlidingUpPanel
          ref={c => this._panel = c}
          visible={this.state.visible}
          onRequestClose={() => this.setState({ visible: false })}>
          <View style={styles.container}>
          <TouchableOpacity style={{ backgroundColor: "white", width: 100, height: 40, justifyContent: "center", alignSelf: "center", borderWidth: 3, borderColor: "#4CAF50", borderRadius: 5 }} title='hide' onPress={() => this._panel.transitionTo(0)}>
              <Text style={{ alignSelf: "center", color: "#4CAF50" }}>Hide panel</Text>
            </TouchableOpacity>
            <Text style={{paddingTop: "50%"}}>Panel content</Text>
            <Text >Panel content</Text>
            <Text >Panel content</Text>
            <Text >Panel content</Text>
            <Text >Panel content</Text>
            <Text >Panel content</Text>
           
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}
