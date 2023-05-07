import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {MyButton} from '../../components/ui/MyButton';
import {OptionalDataItem, StackParamList} from '../../utilities/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  setFilter: Dispatch<SetStateAction<OptionalDataItem>>;
};

export const FilterButton = ({setFilter}: Props) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <MyButton
      containerStyle={styles.container}
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
  container: {marginLeft: 'auto', marginBottom: 20},
});
