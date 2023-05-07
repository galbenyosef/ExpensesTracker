import React, {useCallback, useState} from 'react';
import {Pressable} from 'react-native';
import {SlideUpModal} from '../../components/ui/SlideUpModal';
import {MyTextInput} from '../../components/ui/MyTextInput';
import {MyButton} from '../../components/ui/MyButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from './DatePicker';
import {
  DataItem,
  OptionalDataItem,
  StackParamList,
} from '../../utilities/types';
import {useMMKVString} from 'react-native-mmkv';
import {createNewDataItem} from '../../utilities/data';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type Props = StackScreenProps<StackParamList, 'CreateEditFilterExpenseScreen'>;

export const CreateEditFilterExpenseScreen = ({route}: Props) => {
  const item = route.params?.item;
  const setFilter = route.params?.setFilter;

  const [dataItem, setDataItem] = useState<OptionalDataItem>(
    item || createNewDataItem(),
  );

  const [datePickerShow, setDatePickerShow] = useState(false);

  const [amountString, setAmountString] = useState(
    dataItem.amount?.toString() || '',
  );

  const [dataString, setDataString] = useMMKVString('data');

  const navigation = useNavigation();

  const onDateConfirm = (newDate: Date): void => {
    setDataItem({...dataItem, date: newDate});
    setDatePickerShow(false);
  };

  const onDateCancel = (): void => {
    setDatePickerShow(false);
  };

  const onTitleChange = (newTitle: string) => {
    setDataItem({...dataItem, title: newTitle});
  };

  const onAmountChange = (newAmount: string) => {
    setAmountString(newAmount);
  };

  const onButtonPress = useCallback(
    (candidateItem: OptionalDataItem) => {
      if (
        candidateItem &&
        candidateItem.title &&
        candidateItem.amount &&
        candidateItem.date
      ) {
        const newItem: DataItem = {
          id: candidateItem.id,
          title: candidateItem.title,
          date: candidateItem.date,
          amount: candidateItem.amount,
        };

        const parsedData: DataItem[] = dataString && JSON.parse(dataString);
        let newParsedData: DataItem[] = parsedData;

        //first insertion
        if (!newParsedData) {
          newParsedData = [newItem];
        }
        //array inited, find if item exist
        else if (newParsedData) {
          let itemExistsIndex = newParsedData.findIndex(
            _item => _item.id === newItem.id,
          );
          //update
          if (itemExistsIndex > -1) {
            newParsedData[itemExistsIndex] = newItem;
          }
          //create
          else {
            newParsedData.push(newItem);
          }
        }

        setDataString(JSON.stringify(newParsedData));
        navigation.goBack();
      }
    },
    [dataString, navigation, setDataString],
  );

  const onFilterPress = () => {
    setFilter?.({...dataItem, amount: Number(amountString)});
    navigation.goBack();
  };

  const resetState = () => {
    setDataItem({...createNewDataItem(), id: dataItem.id});
    setAmountString('');
  };

  return (
    <>
      <SlideUpModal
        onClear={resetState}
        title={`${setFilter ? 'Filter' : item ? 'Edit' : 'Create'} Expense`}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          extraScrollHeight={-20}
          enableOnAndroid
          style={{flexGrow: 1}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MyTextInput
            value={dataItem.title}
            containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
            placeholder="Title"
            onChangedText={onTitleChange}
          />
          <MyTextInput
            onChangedText={onAmountChange}
            value={amountString}
            keyboardType="number-pad"
            containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
            placeholder="Amount"
          />
          <Pressable onPress={() => setDatePickerShow(true)}>
            <MyTextInput
              disabled
              value={
                dataItem.date &&
                new Date(dataItem.date).toLocaleDateString('en-GB')
              }
              keyboardType="numeric"
              containerStyle={{borderBottomWidth: 0.5, marginBottom: 20}}
              placeholder="Date"
            />
          </Pressable>

          <MyButton
            containerStyle={{marginTop: 50, marginBottom: 50}}
            title={setFilter ? 'Filter' : item ? 'Save' : 'Create'}
            onPress={() => {
              setFilter
                ? onFilterPress()
                : onButtonPress({...dataItem, amount: Number(amountString)});
            }}
          />
        </KeyboardAwareScrollView>
      </SlideUpModal>
      <DatePicker
        open={datePickerShow}
        onCancel={onDateCancel}
        onConfirm={onDateConfirm}
        date={dataItem.date ? new Date(dataItem.date) : new Date()}
      />
    </>
  );
};
