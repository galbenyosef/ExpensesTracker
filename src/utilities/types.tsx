import {StackScreenProps} from '@react-navigation/stack';

export type StackParamList = {
  WelcomeScreen: StackScreenProps<StackParamList>;
  AppTabs: undefined;
  CreateExpenseScreen: undefined;
  EditExpenseScreen: undefined;
};

export type TabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  CreateExpenseButton: undefined;
};

export type DataItem = {
  title: string;
  amount: number;
  date: Date;
};
