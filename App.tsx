import React from 'react';
import {Keyboard, Pressable, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useInitApp} from './src/utilities/useInitApp';
import {LoadingModal} from './src/screens/modals/LoadingModal';
import {StackNavigator} from './src/navigation/StackNavigator';

function App() {
  const [isAppReady, initialRouteName, setIsNavigationReady, name] =
    useInitApp();

  return (
    <SafeAreaProvider>
      <LoadingModal show={!isAppReady} />
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={{flexGrow: 1}}>
        <NavigationContainer onReady={() => setIsNavigationReady(true)}>
          <StackNavigator initialRouteName={initialRouteName} name={name} />
        </NavigationContainer>
      </Pressable>
    </SafeAreaProvider>
  );
}

export default App;
