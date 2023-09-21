// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovie } from '../../customHooks/useMovie';
import HorizontalSlide from '../slides/HorizontalSlide';
import MoviePoster from './MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {
  const { top } = useSafeAreaInsets();

  const { mostPopular, topRated, playingNow, isLoading } = useMovie();

  if (isLoading) {
    return <View>
      <ActivityIndicator color="red" size={50} />
    </View>;
  }

  return (
    <ScrollView >
      <View style={{ marginTop: top + 20 }}>
        <Text>Movie DB</Text>

        <View style={{
          paddingVertical: 10,
        }}>
          <Text style={{
            paddingHorizontal: 20,
            marginBottom: 10,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#000',
          }}>Top rated</Text>
          <View style={{
            width: windowWidth,
            height: 450,
          }}>
            <Carousel
              data={topRated}
              renderItem={({ item }) => <MoviePoster
                movie={item}
              />}
              sliderWidth={windowWidth}
              itemWidth={240}
            />
          </View>

          <HorizontalSlide title={'Playing now'} movieList={playingNow} />
          <HorizontalSlide title={'Most popular'} movieList={mostPopular} />

        </View>
      </View>
    </ScrollView>
  );


};

export default Home;
