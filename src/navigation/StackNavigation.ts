import {createNavigationContainerRef} from '@react-navigation/native';
import {StackParamList} from '../utilities/types';

export const navigationRef = createNavigationContainerRef<StackParamList>();

//example for navigating without props/hook
export const Navigator = {
  navigate(name: keyof StackParamList, params: any) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  },
};
