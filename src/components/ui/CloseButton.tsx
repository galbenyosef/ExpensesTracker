import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {
  onPress?: () => void;
};

export const CloseButton = ({onPress}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      alignSelf: 'flex-end',
      borderWidth: 1,
      width: 40,
      height: 40,
    }}>
    <Text
      style={{
        fontSize: 32,
        textAlign: 'center',
      }}>
      &times;
    </Text>
  </TouchableOpacity>
);
