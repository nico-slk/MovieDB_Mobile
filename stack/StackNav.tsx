import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../components/pages/Home';
import MovieDetail from '../components/pages/MovieDetail';
import { Movie } from '../interfaces/movieListInterface';

export type StackNavigationProps = {
  Home: undefined;
  MovieDetail: Movie;
};

const Stack = createStackNavigator<StackNavigationProps>();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default StackNav;
