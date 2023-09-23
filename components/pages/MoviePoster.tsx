import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Movie } from '../../interfaces/movieListInterface';

interface MovieProps {
  movie: Movie | undefined;
  height?: number;
  width?: number;
}

const MoviePoster = ({ movie, height = 400, width = 240 }: MovieProps) => {

  const imageURL = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetail', movie)}
      style={{
        height,
        width,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 18,
      }}
      activeOpacity={0.7}
    >

      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderRadius: 18,

          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,

          elevation: 10,
        }}
      >
        <Image
          source={{ uri: imageURL }}
          style={{
            flex: 1,
            borderRadius: 18,
            backgroundColor: 'black',
          }}
        />
      </View>
      {/* <Text>HOLA SOY UN TEXTO</Text> */}
    </TouchableOpacity>
  );
};

export default MoviePoster;
