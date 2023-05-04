import {Text, TouchableOpacity} from 'react-native';

type MyButtonType = {
  onPress: () => void;
};

export const MyButton = ({onPress}: MyButtonType) => {
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
