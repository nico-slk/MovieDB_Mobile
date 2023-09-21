import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Movie, MovieListInterface } from '../../interfaces/movieListInterface';
import MoviePoster from '../pages/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

interface HorizontalSlideProps {
  title: string;
  movie?: Movie;
  movieList?: MovieListInterface;
}

const HorizontalSlide = ({ title, movieList }: HorizontalSlideProps) => {
  return (
    <View>
      <View>
        <Text style={{
          paddingHorizontal: 20,
          marginVertical: 10,
        }}>{title}</Text>
        <View style={{
          width: windowWidth,
          borderWidth: 2,
          height: 300,
        }}>
          <FlatList
            data={movieList ? movieList.results : []}
            renderItem={({ item }) => <MoviePoster
              movie={item}
              height={240}
              width={160}
            />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default HorizontalSlide;
