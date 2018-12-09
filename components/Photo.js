import React from 'react';
import {View, ScrollView, Dimensions, Text, TouchableOpacity} from 'react-native';
import ImageHolder from './ImageHolder';

var {height, width} = Dimensions.get('window');


const RenderImages = ({dataSet, count, addOne, subtractOne, loveImage, loves}) => {

  return (
    <ImageHolder
    author = {dataSet[count].author}
    author_url = {dataSet[count].author_url}
    url = {`https://picsum.photos/200/300?image=${dataSet[count].id}`}
    width = {width-30}
    count={count}
    addOne={addOne}
    subtractOne={subtractOne}
    imageData={dataSet[count]}
    loveImage={loveImage}
    loves = {loves}
    />
  )
}


//Friend App Header
const RenderHeader = ({modalVisible, renderModal, lovedList}) =>{

return (
  <View
  style = {{
    width: width,
    height:80,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row', justifyContent: 'space-between',
    }}
  >
{lovedList.length>0 ?
  <TouchableOpacity
    style={{
      width: 50,
      height: 50,
      borderRadius: 80/2,
      borderColor: 'white',
      backgroundColor: 'white',
      justifyContent: 'center',
      marginTop: 10,
      marginLeft: 15
    }}
    onPress={()=> renderModal()}
  >
    <Text style={{ color: 'royalblue', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
    Loved
    </Text>
  </TouchableOpacity>
:
<View
style={{width: 50,
height: 50}}
/>
}



  <Text
  style = {{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginRight: width/2.25
  }}>
  :-)
  </Text>


  </View>
)}


const Photo = ({dataSet, count, addOne, subtractOne, loveImage, loves, modalVisible,
                renderModal, lovedList}) => {
return(
<View>
<RenderHeader modalVisible={modalVisible} renderModal={renderModal}
lovedList={lovedList} />
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
  <RenderImages dataSet={dataSet} count={count} addOne={addOne}
  subtractOne={subtractOne} loveImage = {loveImage} loves ={loves} />

  </View>
  </ScrollView>
</View>
)
}

export default Photo;
