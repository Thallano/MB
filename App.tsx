import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';

import { RalewayDots_400Regular, useFonts} from '@expo-google-fonts/raleway-dots';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    RalewayDots_400Regular, 
    Poppins_400Regular, 
    Poppins_600SemiBold,
  }); 
  
  if (!fontsLoaded){
    return <AppLoading/>;  
  } else {
    return (
    <>
      <AppStack />
      
      <StatusBar style="light"  />
    </>
    );
  } 
}
