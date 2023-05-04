import * as React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {useInitApp} from './src/utilities/useInitApp';
import {StackParamList} from './src/utilities/types';

const Stack = createStackNavigator<StackParamList>();

function App() {
  const [isAppReady, initialRouteName, setIsNavigationReady] = useInitApp();

  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <NavigationContainer onReady={() => setIsNavigationReady(true)}>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={{
                headerTitle: 'Gal B',
                headerTransparent: true,
                headerStatusBarHeight: 0,
                headerTitleContainerStyle: {justifyContent: 'center'},
              }}
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
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
