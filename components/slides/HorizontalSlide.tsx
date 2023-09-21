import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Movie } from '../../interfaces/movieListInterface';
import MoviePoster from '../pages/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

interface HorizontalSlideProps {
  title: string;
  movieList?: Movie[];
}

const HorizontalSlide = ({ title, movieList }: HorizontalSlideProps) => {
  return (
    <View>
      <View>
        <Text style={{
          paddingHorizontal: 20,
          marginVertical: 10,
          fontWeight: 'bold',
          fontSize: 24,
          color: '#000',
        }}>{title}</Text>
        <View style={{
          width: windowWidth,
          height: 300,
        }}>
          <FlatList
            data={movieList}
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
