import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SectionList,
} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {MyButton} from '../components/ui/MyButton';
import {DataItem} from '../utilities/types';
import {BottomTabs} from '../components/ui/BottomTabs';
import {SlideUpModal} from './modals/SlideUpModal';

/* function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

const generate = () => randomDate(new Date(2023, 1, 2), new Date());

const data = [
  {
    title: 'borneo',
    amount: 541.53,
    date: new Date(),
  },
  {
    title: 'armeo',
    amount: 5414.53,
    date: new Date(),
  },
  {
    title: 'maeted',
    amount: 24.53,
    date: generate(),
  },
  {
    title: 'dawdadaw',
    amount: 55.53,
    date: generate(),
  },
  {
    title: 'sa',
    amount: 43.53,
    date: generate(),
  },
];

function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return {...prev, [groupKey]: group};
  }, {});
}

const sorted = data.sort(
  (a: DataItem, b: DataItem) => b.date.getTime() - a.date.getTime(),
);

console.log('sorted: ');
console.log(sorted);

const grouped = groupBy(sorted, prop => prop.date.toLocaleDateString('en-GB'));

console.log('grouped: ');
console.log(grouped);

let readyData = Object.keys(grouped).map(groupKey => ({
  title: groupKey,
  data: grouped[groupKey],
})); */

export function HomeScreen() {
  const [name, setName] = useMMKVString('name');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text>Total Expenses: $1,024.00</Text>
        <MyButton onPress={() => {}} />
        {/*       <SectionList sections={[]} keyExtractor={item => item.date} />
         */}
        <TouchableOpacity onPress={() => setName('')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
      <SlideUpModal />
      <BottomTabs active={'Home'} />
    </View>
  );
}
