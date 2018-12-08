import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


//extends takes the class stuff from react.component for the render function that we defined
export default class App extends React.Component {

  constructor(props){
    console.log('constructor', new Date().getTime());
    super(props);
    this.state = {
      someData: 'Jen is dating ...'
    }
  }

  componentWillMount(){
    console.log('constructorWillMount', new Date().getTime());

  }

  componentDidMount(){
    console.log('constructorDidMount', new Date().getTime());

    // this.state.someData = 'Camilo'
}

  render() {
    console.log('render', new Date().getTime());
    console.log('state', this.state);
    return (
      <View style={styles.container}>
        <Text>{this.state.someData}</Text>

        <Image
        style={{ width:250, height:150, borderRadius:25}}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Biddy_Martin_cropped.jpg'}}
        >
        </Image>

        <TouchableOpacity
          onPress={()=>{
            this.setState({
            someData:'Friend 1'
              })
            }}
              style={{
              width:50,
              height:25,
              borderRadius:10,
              backgroundColor: 'darkkhaki'
              }}
                />
        <TouchableOpacity
          onPress={()=>{
            this.setState({
            someData:'Jen is going to eat...'
              })
            }}
              style={{
              width:50,
              height: 25,
              borderRadius:10,
              backgroundColor: 'deepskyblue'
              }}
                        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
