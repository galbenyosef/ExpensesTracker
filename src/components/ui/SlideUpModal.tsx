import * as React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
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
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <Pressable onPress={navigation.goBack} style={styles.deadArea} />
        <View style={styles.sheetContainer}>
          <CloseButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            {onClear ? (
              <TouchableOpacity onPress={onClear} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.bodyContainer}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  deadArea: {flex: 1, backgroundColor: 'transparent'},
  sheetContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'red',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  clearButton: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 20,
    justifyContent: 'center',
  },
  clearButtonText: {fontSize: 12, color: '#455EFF'},
  bodyContainer: {
    borderColor: 'purple',
    padding: 20,
  },
});
