import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utilities/types';

export const CreateExpenseButton = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CreateEditFilterExpenseScreen');
      }}
      style={styles.container}>
      <Text style={styles.plusSign}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455EFF',
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    top: -28,
  },
  plusSign: {
    fontSize: 24,
    color: 'white',
  },
});
