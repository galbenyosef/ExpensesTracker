import * as React from 'react';
import {Modal, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type BottomTabsType = {
  active: string;
};

export const BottomTabs = ({active}: BottomTabsType) => {
  return (
    <View
      style={{
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(0,0,0,0.5)',
        height: 87,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        containerStyle={{
          flex: 1,
        }}>
        <Text
          style={{
            height: '100%',
            fontFamily: 'Helvetica',
            fontSize: 13,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        containerStyle={{
          backgroundColor: '#455EFF',
          height: 56,
          width: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 28,
          top: -28 - (87 - 56) / 2,
        }}>
        <Text style={{fontSize: 24, color: 'white'}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        containerStyle={{
          flex: 1,
        }}>
        <Text
          style={{
            height: '100%',
            fontFamily: 'Helvetica',
            fontSize: 13,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
