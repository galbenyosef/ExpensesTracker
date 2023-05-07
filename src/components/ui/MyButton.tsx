import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type MyButtonType = {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  icon?: ImageSourcePropType;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
};

export const MyButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  iconStyle,
  icon,
}: MyButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...containerStyle,
      }}>
      <Text style={{...styles.title, ...textStyle}}>{title}</Text>
      {icon ? (
        <Image style={{width: 20, height: 20, ...iconStyle}} source={icon} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B58AD',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
