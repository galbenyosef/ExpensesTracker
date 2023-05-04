import * as React from 'react';
import {useEffect, useRef} from 'react';
import {TouchableOpacity, Modal, Animated, Text, View} from 'react-native';
import {CloseButton} from '../../components/ui/CloseButton';

type Props = {
  show?: boolean;
  children: any;
};

export function SlideUpModal({show, children}: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="slide"
      visible={show}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          borderColor: 'green',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <View
          style={{
            flex: 1,
          }}
        />
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: 'red',
            backgroundColor: 'white',
          }}>
          <CloseButton onPress={() => {}} />
          <View style={{borderWidth: 5, flex: 1}}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
