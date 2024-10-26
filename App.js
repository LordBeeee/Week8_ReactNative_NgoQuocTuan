import React,{useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Button,TouchableOpacity,Image} from 'react-native';
import Home from './Home';
import Bike from './Bike';
import Detail from './Detail'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bike" component={Bike} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;