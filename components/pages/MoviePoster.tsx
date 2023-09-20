import React from 'react';
import { Image, View } from 'react-native';
import { Movie } from '../../interfaces/movieListInterface';

interface MovieProps {
  movie: Movie | undefined;
}

const MoviePoster = ({ movie }: MovieProps) => {

  const imageURL = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  return (
    <View
      style={{
        height: 300,
        width: 200,
      }}
    >
      <Image
        source={{ uri: imageURL }}
        style={{
          flex: 1,
          borderRadius: 18,
        }}
      />
    </View>
  );
};

export default MoviePoster;
