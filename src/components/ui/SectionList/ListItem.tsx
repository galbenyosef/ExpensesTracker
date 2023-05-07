import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DataItem, StackParamList} from '../../../utilities/types';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  item: DataItem;
};

export const ListItem = ({item}: Props) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const onItemPress = () =>
    navigation.navigate('CreateEditFilterExpenseScreen', {item});

  return (
    <TouchableOpacity
      onPress={() => onItemPress()}
      key={item.id}
      style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.amount}>$ {Number(item.amount).toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {color: 'black', fontSize: 18},
  amount: {marginLeft: 'auto', color: 'black', fontSize: 18},
});
