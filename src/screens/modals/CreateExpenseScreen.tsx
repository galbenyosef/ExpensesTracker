import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {SlideUpModal} from '../../components/ui/SlideUpModal';
import {MyTextInput} from '../../components/ui/MyTextInput';
import {MyButton} from '../../components/ui/MyButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

export const CreateExpenseScreen = () => {
  return (
    <SlideUpModal>
      <KeyboardAwareScrollView
        extraScrollHeight={-30}
        enableOnAndroid
        style={{flexGrow: 1}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
          placeholder="Title"
        />
        <MyTextInput
          keyboardType="number-pad"
          containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
          placeholder="Amount"
        />
        <MyTextInput
          keyboardType="phone-pad"
          containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
          placeholder="Date"
        />
        <MyButton
          containerStyle={{marginTop: 50, marginBottom: 50}}
          title="Create"
          onPress={() => {}}
        />
      </KeyboardAwareScrollView>
    </SlideUpModal>
  );
};
