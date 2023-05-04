import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {SlideUpModal} from '../../components/ui/SlideUpModal';
import {MyTextInput} from '../../components/ui/MyTextInput';
import {MyButton} from '../../components/ui/MyButton';

export const CreateExpenseScreen = () => {
  return (
    <SlideUpModal>
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Title"
        />
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Amount"
        />
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Date"
        />
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Date"
        />
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Date"
        />

        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Date"
        />
        <MyTextInput
          containerStyle={{borderBottomWidth: 0.5}}
          placeholder="Date"
        />
        <MyButton
          containerStyle={{marginTop: 50, marginBottom: 50}}
          title="Create"
          onPress={() => {}}
        />
      </KeyboardAvoidingView>
    </SlideUpModal>
  );
};
