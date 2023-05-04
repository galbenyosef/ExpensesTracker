import {useState} from 'react';
import {View} from 'react-native';
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
    setStoredName(input);
    navigation.replace('AppTabs');
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
