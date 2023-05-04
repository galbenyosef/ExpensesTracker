import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {useInitApp} from './src/utilities/useInitApp';
import {StackParamList} from './src/utilities/types';
import {navigationRef} from './src/navigation/StackNavigation';
import {LoadingModal} from './src/screens/modals/LoadingModal';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Stack = createStackNavigator<StackParamList>();

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
        <NavigationContainer
          ref={navigationRef}
          onReady={() => setIsNavigationReady(true)}>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={{
                headerTitle: name,
                headerStyle: {backgroundColor: 'transparent'},
                headerTitleAlign: 'center',
              }}
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Pressable>
    </SafeAreaProvider>
  );
}

const TestScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1, borderWidth: 1}}>
      <View style={{flex: 1, borderWidth: 1}}>
        <Text style={{fontSize: 60, fontFamily: 'Helvetica'}}>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
