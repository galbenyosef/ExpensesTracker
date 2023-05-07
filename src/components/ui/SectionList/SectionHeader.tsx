import React from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  section: {title: string};
};

export const SectionHeader = ({section: {title}}: Props) => (
  <Text style={styles.text}>{title}</Text>
);

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#F4EEEE',
    paddingHorizontal: 20,
    color: 'black',
    paddingVertical: 5,
  },
});
