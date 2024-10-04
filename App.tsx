import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { fontFamilies } from './src/constants/fontFamilies';
import HomeScreen from './src/homes/HomeScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    [fontFamilies.regular]: require('./assets/fonts/Poppins-Regular.ttf'),
    [fontFamilies.medium]: require('./assets/fonts/Poppins-Medium.ttf'),
    [fontFamilies.semiBold]: require('./assets/fonts/Poppins-SemiBold.ttf'),
    [fontFamilies.bold]: require('./assets/fonts/Poppins-Bold.ttf'),
    });
    useEffect(() => {
    if (loaded || error) {
    SplashScreen.hideAsync();
    }
    }, [loaded, error]);
    if (!loaded && !error) {
    return null;
    }
  return (
    
    <>
    <StatusBar translucent style='dark' backgroundColor='transparent'/> 
    <HomeScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
