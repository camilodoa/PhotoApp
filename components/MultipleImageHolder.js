import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, Linking } from 'react-native';
const { width, height } = Dimensions.get('window');
const nameSize = width-30;

// const RenderOpenOnWeb = ({props}) => {
//   console.log(props.author_url);
//   return(
//     <View>
//       <TouchableOpacity
//         style={{
//           width: nameSize,
//           height: nameSize/6,
//           borderRadius: nameSize/10,
//           backgroundColor: 'white',
//           justifyContent: 'center', alignItems: 'center',
//           marginLeft: 15, marginRight: 15
//         }}
//         onPress={()=>{
//             Linking.canOpenURL(props.author_url).then((supported) => {
//                 if (!supported) {
//                     console.log('Can\'t handle url: ' + props.author_url);
//                 }else {
//                   return Linking.openURL(props.author_url);
//                 }})
//             .catch(err => console.error('An error occurred', err));
//           }}
//       >
//       <Text style={{ color: 'royalblue', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>
//         {props.author}
//       </Text
//       >
//       </TouchableOpacity>
//     </View>
// )}



const MultipleImageHolder = ({unLoveImage, id, width, url, author}) => {
  return (
    <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Image
        source={{ uri: url }}
        style={{
          width: width,
          height: width,
          borderRadius: 15,
          margin: 12,

          }}
      />
      <View style={{display:'flex', flexDirection:'row'}}>
      <View
      style={{
        flex:7
      }}>
      <Text style={{ color: 'royalblue', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>
        {author}
      </Text>
      </View>

      <TouchableOpacity
      style={{
        flex:3,
        width: 30,
        height: 30,
        borderRadius: 200/2,
        borderColor: 'white',
        backgroundColor: 'tomato',
        marginRight: 15,
        justifyContent: 'center',
        alignItems:'center'
      }}
      onPress={()=> unLoveImage(id)}
    >


      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
      x
      </Text>

      </TouchableOpacity>
    </View>
    </View>
  )
}

export default MultipleImageHolder;
