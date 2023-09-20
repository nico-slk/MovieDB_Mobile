// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import useMoviesList from '../../customHooks/useMoviesList';
import MoviePoster from './MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {
  // const navigation = useNavigation<any>();
  const { top } = useSafeAreaInsets();

  const { moviesList, isLoading } = useMoviesList();

  if (isLoading && !moviesList) {
    return <View>
      <ActivityIndicator color="red" size={50} />
    </View>;
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>Home</Text>
      <Text>{`
      ${moviesList?.results[3]?.original_title}
      ${moviesList?.results[3]?.overview}
      ${moviesList?.results[3]?.poster_path}
      `}</Text>

      <View style={{ height: 400 }}>
        <Carousel
          data={moviesList ? moviesList.results : []}
          renderItem={({ item }) => <MoviePoster
            movie={item}
          />}
          sliderWidth={windowWidth}
          itemWidth={200}
        />

      </View>
    </View>
  );


};

export default Home;
