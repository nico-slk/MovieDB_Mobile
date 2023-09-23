import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { StackNavigationProps } from '../../stack/StackNav';

interface MovieDetalProps extends StackScreenProps<StackNavigationProps, 'MovieDetail'> { }

const screenHeight = Dimensions.get('screen').height;

const MovieDetail = ({ route }: MovieDetalProps) => {
  const { params } = route;
  const poster = `https://image.tmdb.org/t/p/w500${params?.poster_path}`;
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: screenHeight * 0.7,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,

          elevation: 10,
          overflow: 'hidden',
        }}
      >

        <Image
          source={{ uri: poster }}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text>{params?.original_title}</Text>

      </View>
    </ScrollView>
  );
};

export default MovieDetail;
