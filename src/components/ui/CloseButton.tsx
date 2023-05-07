import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  onPress?: () => void;
};

export const CloseButton = ({onPress}: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.icon}>&times;</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
  },
  icon: {
    fontSize: 32,
    textAlign: 'center',
  },
});
