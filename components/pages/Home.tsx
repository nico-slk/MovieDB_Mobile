// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import useMostPopularMovies from '../../customHooks/useMostPopularMovies';
import useMoviesList from '../../customHooks/useMoviesList';
import usePlayingNowMovies from '../../customHooks/usePlayingNowMovies';
import HorizontalSlide from '../slides/HorizontalSlide';
import MoviePoster from './MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {
  const { top } = useSafeAreaInsets();

  const { moviesList, isLoading } = useMoviesList();
  const { playingNowMovies, isLoadingPlayingNowMovies } = usePlayingNowMovies();
  const { mostPopularMovies, isLoadingMostPopularMovies } = useMostPopularMovies();

  if (isLoading && !moviesList && isLoadingPlayingNowMovies && isLoadingMostPopularMovies) {
    return <View>
      <ActivityIndicator color="red" size={50} />
    </View>;
  }

  return (
    <ScrollView >
      <View style={{ marginTop: top + 20 }}>
        <Text>Movie DB</Text>

        <View style={{
          borderWidth: 2,
          paddingVertical: 10,
        }}>
          <Text style={{
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>Most popular</Text>
          <View style={{
            width: windowWidth,
            borderWidth: 2,
            height: 450,
          }}>
            <Carousel
              data={moviesList ? moviesList.results : []}
              renderItem={({ item }) => <MoviePoster
                movie={item}
              />}
              sliderWidth={windowWidth}
              itemWidth={240}
            />
          </View>

          <HorizontalSlide title={'Playing now'} movieList={playingNowMovies} />
          <HorizontalSlide title={'Most popular'} movieList={mostPopularMovies} />

        </View>
      </View>
    </ScrollView>
  );


};

export default Home;
