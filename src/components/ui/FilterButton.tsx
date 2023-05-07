import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {MyButton} from '../../components/ui/MyButton';
import {OptionalDataItem, StackParamList} from '../../utilities/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
const FilterIcon = require('../../../assets/filter.png');

type Props = {
  setFilter: Dispatch<SetStateAction<OptionalDataItem>>;
};

export const FilterButton = ({setFilter}: Props) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <MyButton
      containerStyle={styles.container}
      icon={FilterIcon}
      iconStyle={{marginRight: 15}}
      textStyle={{color: 'black'}}
      title="Filters"
      onPress={() => {
        navigation.navigate('CreateEditFilterExpenseScreen', {
          setFilter,
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginBottom: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
});
