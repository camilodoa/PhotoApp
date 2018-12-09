import React from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar, Button, Linking, Dimensions,} from 'react-native';
const { width, height } = Dimensions.get('window');
const nameSize = width-30;

const RenderOpenOnWeb = ({imageData}) => {
  return(
    <View>
      <TouchableOpacity
        style={{
          width: nameSize,
          height: nameSize/6,
          borderRadius: nameSize/10,
          backgroundColor: 'white',
          justifyContent: 'center', alignItems: 'center',
          marginLeft: 15, marginRight: 15
        }}
        onPress={()=>{
            Linking.canOpenURL(imageData.author_url).then((supported) => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + imageData.author_url);
                }else {
                  return Linking.openURL(imageData.author_url);
                }})
            .catch(err => console.error('An error occurred', err));
          }}
      >
      <Text style={{ color: 'royalblue', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
        {imageData.author}
      </Text>
      </TouchableOpacity>
    </View>
)}

const NextPlease = ({imageData, addOne, subtractOne, count, loves, loveImage}) =>{
  const buttonSize= width/3.7;

  return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',

    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  }}>
  {count > 0 ?
    <TouchableOpacity
    style={{
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize/2,
      backgroundColor: 'royalblue',
      justifyContent: 'center', alignItems: 'center'
    }}
    onPress={subtractOne}
  >

    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
    Back
    </Text>
  </TouchableOpacity>
  :
  <View style={{
    width: buttonSize,
    height: buttonSize}}/>
  }

{!imageData.loved?
  <TouchableOpacity
    style={{
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize/2,
      backgroundColor: 'tomato',
      justifyContent: 'center', alignItems: 'center'
    }}
    onPress={() => loveImage(imageData.id)}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
      Love
    </Text>
  </TouchableOpacity>
:
<View style={{width: buttonSize,
height: buttonSize}}/>

}

    <TouchableOpacity
      style={{
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize/2,
        backgroundColor: 'royalblue',
        justifyContent: 'center', alignItems: 'center'
      }}
      onPress={() => addOne()}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
        Next
      </Text>
    </TouchableOpacity>
    </View>
  )
}




const ImageHolder = ({imageData, url, width, addOne, subtractOne, count, loves, loveImage}) => {
  return(
    <View>
      <Image
        source = {{ uri: url }}
        style = {{
          width: width,
          height: width,
          borderRadius: 15,
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          //marginLeft: 12,
          //marginRight:12
          }}
      />

      <View
      style = {{
        marginTop:1
      }}>
      <RenderOpenOnWeb imageData={imageData}/>
      <NextPlease imageData={imageData} addOne={addOne} subtractOne={subtractOne} count={count}
      loveImage={loveImage} loves={loves}/>
      </View>

    </View>
  )
}

export default ImageHolder;
