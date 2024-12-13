import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OurTabs from '@/components/TabBar/Navigation';
import {PlayersComponent} from "@/components/PlayerCrudComponent/CrudComponent"; // Ruta correcta
import messaging from '@react-native-firebase/messaging';
const App = () => {
 async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async() => {
    const token = await messaging().getToken()
    console.log ("Token = ", token)
  }
  useEffect(()=>{
    requestUserPermission()
    getToken()
  })
  return (
    <NavigationContainer>
      <OurTabs /> {/* Aquí va tu Tab Navigator */}

    </NavigationContainer>
  );
};

export default App;
