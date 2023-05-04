import * as React from 'react';
import {useEffect, useRef} from 'react';
import {TouchableOpacity, Modal, Animated} from 'react-native';
const Logo = require('../../../assets/logo.png');

type LoadingModalProps = {
  show: boolean;
};

export function LoadingModal({show}: LoadingModalProps) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }),
    ).start(() => {
      rotateAnim.setValue(0);
    });
  }, [rotateAnim]);

  const interpolateRotating = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {}}
      style={{}}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          style={{
            transform: [{rotate: interpolateRotating}],
            height: 250,
            width: 250,
            resizeMode: 'contain',
            borderRadius: 250,
          }}
          source={Logo}
        />
      </TouchableOpacity>
    </Modal>
  );
}
