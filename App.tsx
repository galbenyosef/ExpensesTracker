import * as React from 'react';
import {
  Keyboard,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {useInitApp} from './src/utilities/useInitApp';
import {StackParamList, TabParamList} from './src/utilities/types';
import {navigationRef} from './src/navigation/StackNavigation';
import {LoadingModal} from './src/screens/modals/LoadingModal';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreateExpenseScreen} from './src/screens/modals/CreateExpenseScreen';

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const CreateExpenseButton = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CreateExpenseScreen');
      }}
      style={{
        backgroundColor: '#455EFF',
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        top: -28,
      }}>
      <Text style={{fontSize: 24, color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
};

const NOCOMP = () => null;

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarLabelStyle: {
        fontSize: 13,
      },
      tabBarStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        height: 87,
      },
      tabBarIconStyle: {display: 'none'},
    }}>
    <Tab.Screen
      name="HomeScreen"
      options={{title: 'Home'}}
      component={HomeScreen}
    />
    <Tab.Screen
      options={{tabBarButton: CreateExpenseButton}}
      name="CreateExpenseButton"
      component={NOCOMP}
    />
    <Tab.Screen
      name="ProfileScreen"
      options={{title: 'Profile'}}
      component={HomeScreen}
    />
  </Tab.Navigator>
);

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
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={{
                headerTitle: name,
                headerStyle: {backgroundColor: 'transparent'},
                headerTitleAlign: 'center',
              }}
              name="AppTabs"
              component={AppTabs}
            />
            <Stack.Screen
              name="CreateExpenseScreen"
              component={CreateExpenseScreen}
              options={{headerShown: false, presentation: 'transparentModal'}}
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
