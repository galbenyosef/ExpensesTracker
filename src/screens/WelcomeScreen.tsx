import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {StackScreenProps} from '@react-navigation/stack';
import {MyTextInput} from '../components/ui/MyTextInput';
import {MyButton} from '../components/ui/MyButton';
import {StackParamList} from '../utilities/types';

type Props = StackScreenProps<StackParamList, 'WelcomeScreen'>;

export function WelcomeScreen({navigation}: Props) {
  const [, setStoredName] = useMMKVString('name');
  const [input, setInput] = useState<string>('');

  const onLoginPress = () => {
    if (input) {
      setStoredName(input);
      navigation.replace('AppTabs');
    }
  };

  const onTextInputChange = (txt: string) => {
    setInput(txt);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <MyTextInput
          containerStyle={styles.inputContainer}
          onChangedText={onTextInputChange}
          placeholder={'Enter your name'}
        />
      </View>
      <View>
        <MyButton title="Login" onPress={onLoginPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flex: 0.8,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5B58AD',
    borderRadius: 3,
  },
});
