import {useRef, useState} from 'react';
import {View, TextInput, Animated, ViewStyle, Keyboard} from 'react-native';

type MyTextInputType = {
  initValue?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  onChangedText?: (txt: string) => void;
};

export const MyTextInput = ({
  initValue,
  placeholder,
  containerStyle,
  inputStyle,
  onChangedText,
}: MyTextInputType) => {
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
