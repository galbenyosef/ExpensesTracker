import * as React from 'react';
import {Modal, Pressable, View} from 'react-native';
import {CloseButton} from './CloseButton';
import {useNavigation} from '@react-navigation/native';

type Props = {
  show?: boolean;
  children: any;
};

export function SlideUpModal({show, children}: Props) {
  const navigation = useNavigation();

  return (
    <Modal
      hardwareAccelerated
      transparent
      onRequestClose={navigation.goBack}
      statusBarTranslucent
      animationType="slide"
      visible={show}>
      <View
        style={{
          flex: 1,
          borderWidth: 10,
          borderColor: 'green',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <Pressable
          onPress={navigation.goBack}
          style={{flex: 1, backgroundColor: 'transparent'}}
        />
        <View
          style={{
            borderWidth: 2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: 'red',
            backgroundColor: 'white',
          }}>
          <CloseButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{
              borderColor: 'purple',
              borderWidth: 5,
              padding: 20,
            }}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
