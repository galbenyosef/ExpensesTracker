import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppTabs} from './TabNavigator';
import {StackParamList} from '../utilities/types';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {CreateEditFilterExpenseScreen} from '../screens/modals/CreateEditFilterExpenseModal';

const Stack = createStackNavigator<StackParamList>();

type Props = {
  initialRouteName: keyof StackParamList;
  name?: string;
};

export const StackNavigator = ({initialRouteName, name}: Props) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{
          headerTitle: name,
          headerStyle: {backgroundColor: 'transparent'},
          headerTitleAlign: 'center',
        }}
        name="AppTabs"
        component={AppTabs}
      />
      <Stack.Screen
        name="CreateEditFilterExpenseScreen"
        component={CreateEditFilterExpenseScreen}
        options={{headerShown: false, presentation: 'transparentModal'}}
      />
    </Stack.Navigator>
  );
};
