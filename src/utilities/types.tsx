import {Dispatch, SetStateAction} from 'react';

export type StackParamList = {
  WelcomeScreen: undefined;
  AppTabs: undefined;
  CreateEditFilterExpenseScreen:
    | {item?: DataItem; setFilter?: Dispatch<SetStateAction<OptionalDataItem>>}
    | undefined;
};

export type TabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  CreateExpenseButton: undefined;
};

export type OptionalDataItem = {
  id: string;
  title?: string;
  amount?: number;
  date?: Date;
};

export type DataItem = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};
