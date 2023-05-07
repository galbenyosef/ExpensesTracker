import React, {useCallback, useEffect} from 'react';
import {useRef} from 'react';
import {
  View,
  TextInput,
  Animated,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';

type MyTextInputType = {
  value?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  onChangedText?: (newVal: string) => void;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
};

export const MyTextInput = ({
  value,
  placeholder,
  containerStyle,
  inputStyle,
  onChangedText,
  keyboardType,
  disabled,
}: MyTextInputType) => {
  const translateYAnim = useRef(new Animated.Value(value ? -20 : 10)).current;

  const animate = useCallback(() => {
    Animated.timing(translateYAnim, {
      toValue: -20,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateYAnim]);

  const animateReset = useCallback(() => {
    Animated.timing(translateYAnim, {
      toValue: 10,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateYAnim]);

  useEffect(() => {
    if (value && !onChangedText) {
      animate();
    }
    if (!value && !onChangedText) {
      animateReset();
    }
  }, [value, onChangedText, animate, animateReset]);

  const onChangeText = (txt: string) => {
    onChangedText?.(txt);
    if (txt) {
      animate();
    }
  };

  return (
    <View style={{width: 255, ...containerStyle}}>
      <TextInput
        editable={!disabled}
        autoComplete="name"
        keyboardType={keyboardType}
        maxLength={16}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          animate();
        }}
        onEndEditing={() => {
          if (!value) {
            animateReset();
          }
        }}
        textAlignVertical="bottom"
        style={styles.input}
      />
      <Animated.Text
        style={{
          ...styles.placeholder,
          transform: [{translateY: translateYAnim}],
          ...inputStyle,
        }}>
        {placeholder}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    top: 0,
    paddingStart: 4,
    textAlignVertical: 'center',
    bottom: 0,
  },
  input: {
    color: 'black',
    height: 55,
    width: '100%',
    borderBottomColor: 'grey',
  },
});
