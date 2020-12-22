import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Page = ({ backgroundColor, iconName, image, title, paragraph }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
          {title}
        </Text>
       <Image style={{ marginTop: '20%', width: 200, height: 200, }} source={image} />
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', }}>
      <MaterialIcons name={iconName} size={30} color="#C1C1C1" />
        <Text style={{ fontSize: 12, marginTop: 16, maxWidth: '80%', fontWeight: 'bold', textAlign: 'center', color: 'grey' }}>
          {paragraph}
        </Text>
      </View>
    </View>
  );
};

export default Page;