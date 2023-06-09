import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useMMKVString} from 'react-native-mmkv';
import RNBootSplash from 'react-native-bootsplash';
import {StackParamList} from './types';

export const useInitApp = (): [
  boolean,
  keyof StackParamList,
  Dispatch<SetStateAction<boolean>>,
  string?,
] => {
  const [name] = useMMKVString('name');
  const [isNavigationReady, setIsNavigationReady] = useState<boolean>(false);
  const [minSplashTimePassed, setMinSplashTimePassed] =
    useState<boolean>(false);

  const isAppReady = isNavigationReady && minSplashTimePassed;

  const onAppReady = async () => {
    await RNBootSplash.hide({fade: true, duration: 500});
  };

  const initialRouteName = name ? 'AppTabs' : 'WelcomeScreen';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMinSplashTimePassed(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isAppReady) {
      onAppReady();
    }
  }, [isAppReady]);

  return [isAppReady, initialRouteName, setIsNavigationReady, name];
};
