import React from 'react';
import DatePicker from 'react-native-date-picker';

type Props = {
  open: boolean;
  date: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
};

export default ({open, date, onConfirm, onCancel}: Props) => {
  return (
    <DatePicker
      modal
      mode="date"
      locale="en-GB"
      open={open}
      date={date}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};
