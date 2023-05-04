import {Text, TouchableOpacity, ViewStyle} from 'react-native';

type MyButtonType = {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

export const MyButton = ({title, onPress, containerStyle}: MyButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 148,
        height: 48,
        borderRadius: 30,
        backgroundColor: '#5B58AD',
        ...containerStyle,
      }}>
      <Text
        style={{
          color: 'white',
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
