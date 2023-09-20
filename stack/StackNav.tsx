import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../components/pages/Home';
import MovieDetail from '../components/pages/MovieDetail';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Movie detail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default StackNav;
