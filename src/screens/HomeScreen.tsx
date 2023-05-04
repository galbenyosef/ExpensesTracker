import * as React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';

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
      <TouchableOpacity onPress={() => setName('')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
