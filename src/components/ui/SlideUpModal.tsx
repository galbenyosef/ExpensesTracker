import * as React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {CloseButton} from './CloseButton';
import {useNavigation} from '@react-navigation/native';

type Props = {
  show?: boolean;
  title?: string;
  children: any;
  onClear?: () => void;
};

export function SlideUpModal({show, title, children, onClear}: Props) {
  const navigation = useNavigation();

  return (
    <Modal
      hardwareAccelerated
      transparent
      onRequestClose={navigation.goBack}
      statusBarTranslucent
      animationType="slide"
      visible={show}>
      <Pressable
        onPress={Keyboard.dismiss}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <Pressable
          onPress={navigation.goBack}
          style={{flex: 1, backgroundColor: 'transparent'}}
        />
        <View
          style={{
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
          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              {title}
            </Text>
            {onClear ? (
              <TouchableOpacity
                onPress={onClear}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  top: 0,
                  left: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 12, color: '#455EFF'}}>Clear</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View
            style={{
              borderColor: 'purple',
              padding: 20,
            }}>
            {children}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}
