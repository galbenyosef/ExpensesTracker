import React from 'react';
import {View, SectionList, StyleSheet} from 'react-native';
import {DataItem} from '../../../utilities/types';

import {ListItem} from './ListItem';
import {SectionHeader} from './SectionHeader';

const ItemSeparatorComponent = () => <View style={styles.seperator} />;

type Props = {
  data: {title: string; data: DataItem[]}[];
};

export const List = ({data}: Props) => {
  return (
    <SectionList
      ItemSeparatorComponent={ItemSeparatorComponent}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      renderSectionHeader={SectionHeader}
      renderItem={ListItem}
      sections={data}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {height: 0.4, backgroundColor: 'rgba(0,0,0,0.5)'},
  contentContainerStyle: {flexGrow: 1},
  container: {
    backgroundColor: 'white',
  },
});
