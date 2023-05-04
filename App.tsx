import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  ScrollView,
  ViewStyle,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useMMKVString} from 'react-native-mmkv';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

type MyInput = {
  initValue?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  onChangedText?: (txt: string) => void;
};

const MyTextInput = ({
  initValue,
  placeholder,
  containerStyle,
  inputStyle,
  onChangedText,
}: MyInput) => {
  const translateYAnim = useRef(new Animated.Value(10)).current;

  const [text, setText] = useState(initValue);

  const onChangeText = (txt: string) => {
    setText(txt);
    onChangedText?.(txt);
  };

  const animate = () => {
    Animated.timing(translateYAnim, {
      toValue: -20,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const animateReset = () => {
    Animated.timing(translateYAnim, {
      toValue: 10,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{width: 255, ...containerStyle}}>
      <TextInput
        autoComplete="name"
        maxLength={16}
        onChangeText={onChangeText}
        onFocus={() => {
          animate();
        }}
        onBlur={() => {
          if (!text) {
            animateReset();
          }
        }}
        textAlignVertical="bottom"
        style={{
          height: 55,
          width: '100%',
          borderBottomColor: 'grey',
        }}
      />
      <Animated.Text
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          top: 0,
          paddingStart: 4,
          textAlignVertical: 'center',
          bottom: 0,
          transform: [{translateY: translateYAnim}],
          ...inputStyle,
        }}>
        {placeholder}
      </Animated.Text>
    </View>
  );
};

type MyButtonType = {
  onPress?: () => void;
};

const MyButton = ({onPress}: MyButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 148,
        height: 48,
        borderRadius: 30,
        backgroundColor: '#5B58AD',
      }}>
      <Text
        style={{
          color: 'white',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        Login
      </Text>
    </TouchableOpacity>
  );
};

function WelcomeScreen() {
  const [storedName, setStoredName] = useMMKVString('name');
  const [input, setInput] = useState<string>('');

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onLoginPress = () => {
    console.log(input);
    setStoredName(input);
    navigation.replace('Home', {name: input});
  };

  const onTextInputChange = (txt: string) => {
    setInput(txt);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
        }}>
        <MyTextInput
          containerStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#5B58AD',
            borderRadius: 3,
          }}
          onChangedText={onTextInputChange}
          placeholder={'Enter your name'}
        />
      </View>
      <View>
        <MyButton onPress={onLoginPress} />
      </View>
    </View>
  );
}

function HomeScreen() {
  const [name, setName] = useMMKVString('name');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => setName('')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const [name, setName] = useMMKVString('name');
  const [isNavigationReady, setIsNavigationReady] = useState<boolean>(false);
  const [minSplashTimePassed, setMinSplashTimePassed] =
    useState<boolean>(false);

  const onAppReady = async () => {
    await RNBootSplash.hide({fade: true, duration: 500});
    console.log('app is ready');
  };

  const initialRouteName = name ? 'Home' : 'Welcome';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMinSplashTimePassed(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isNavigationReady && minSplashTimePassed) {
      onAppReady();
    }
  }, [isNavigationReady, minSplashTimePassed]);

  return (
    <SafeAreaProvider>
      <StatusBar translucent />
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
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
