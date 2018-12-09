import React from 'react';
import {View, ScrollView, Dimensions, Text, TouchableOpacity} from 'react-native';
import MultipleImageHolder from './MultipleImageHolder'

var {height, width} = Dimensions.get('window');

const RenderImages = ({lovedList, unLoveImage}) => {

  //map() iterates over an array and changes the data to whatever you return in the fuction, without changing the size of the array
  return lovedList.map((element)=>{
    return (
      <MultipleImageHolder
      key={element.id}
      unLoveImage = {unLoveImage}
      props= {element}
      id={element.id}
      author = {element.author}
      author_url = {element.author_url}
      url = {`https://picsum.photos/200/300?image=${element.id}`}
      width = {width/2 - 30}

      />
    )
  })

}

//Gallery Header
const RenderHeader = ({deRenderModal, modalVisible}) =>{
  const buttonSize= width/3.7;
  return (
    <View
    style = {{
      width: width,
      height:90,
      backgroundColor: 'tomato',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'row', justifyContent: 'space-between'
  }}

    >


        <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 80/2,
          borderColor: 'white',
          backgroundColor: 'tomato',
          justifyContent: 'center',
          marginTop: 10,
          marginLeft: 15
        }}
        onPress={()=>deRenderModal()}
      >

        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
        Cancel
        </Text>
      </TouchableOpacity>
    <Text
    style = {{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginRight: width/2.55,
    }}>
    Loved
    </Text>


    </View>
  )
}

const GalleryList = ({lovedList, deRenderModal, modalVisible, unLoveImage}) => {
  return(
<View>
  <RenderHeader deRenderModal = {deRenderModal} modalVisible = {modalVisible}/>
    <ScrollView
    style = {{
      backgroundColor: 'white',
      width: width
      }}
    >

    <View
    style = {{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
    <RenderImages lovedList={lovedList} unLoveImage = {unLoveImage}/>

    </View>
    </ScrollView>
  </View>
  )
}

export default GalleryList;
