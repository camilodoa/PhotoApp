import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Button} from 'react-native';
import Photo from './components/Photo'
import ImageHolder from './components/ImageHolder'
import dataSet from './imageData';
import MultipleImageHolder from './components/MultipleImageHolder'
import GalleryList from './components/GalleryList'


  var {height, width} = Dimensions.get('window');


//extends takes the class stuff from react.component for the render function that we defined
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      loves: dataSet,
      modalVisible: false

    }

    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.loveImage = this.loveImage.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.deRenderModal = this.deRenderModal.bind(this);
    this.unLoveImage = this.unLoveImage.bind(this);
  }

   addOne(){
     console.log("add one before");
    this.setState({ count: this.state.count + 1 });
    console.log("add one after");
  }

   subtractOne(){
    this.setState({ count: this.state.count - 1 });
    console.log("5");
  }

  loveImage(id) {
    var newList = this.state.loves
    const index = newList.findIndex(item => item.id === id)
    console.log(index)
    var obj = newList[index]

    obj.loved = true
    newList[index]= obj;
    console.log(newList[index])
    this.setState({loves: newList})
  }

  unLoveImage(id){
    var newList = this.state.loves
    const index = newList.findIndex(item => item.id === id)
    console.log(index)
    var obj = newList[index]
    obj.loved = false
    newList[index]= obj;
    console.log(newList[index])
    this.setState({loves: newList})
  }



  renderModal(){
      console.log("Render Modal called before completion");
      this.setState({ modalVisible: this.state.modalVisible = true});
      console.log("Render Modal called after completed");
    }

  deRenderModal(){
    this.setState({modalVisible: this.state.modalVisible = false});
  }



  render() {
    var lovedLength = this.state.loves.length;
    var lovedList = [];
    for (element = 0;element<lovedLength;element++){
      if (this.state.loves[element].loved){
        lovedList.push(this.state.loves[element])
      }
    }
    console.log("render function is opening, dont worry");
    return (
      <View style={styles.container}>
      {this.state.modalVisible ?
        <GalleryList
        modalVisible={this.state.modalVisible}
        deRenderModal={this.deRenderModal}
        lovedList={lovedList}
        unLoveImage = {this.unLoveImage}

        />

        :

        <Photo
        lovedList={lovedList}
        count={this.state.count}
        loves = {this.state.loves}
        dataSet = {this.state.loves}
        addOne={this.addOne}
        subtractOne={this.subtractOne}
        loveImage={this.loveImage}
        modalVisible={this.state.modalVisible}
        renderModal={this.renderModal}
        />
      }
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
