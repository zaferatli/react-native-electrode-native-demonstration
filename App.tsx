import React from 'react';
import LandingLatestScreen from './src/components/screens/LandingLatestScreen';

const Screens = {
  LandingLatestScreen: LandingLatestScreen,
};

interface AppProps {
  initialScreen: keyof typeof Screens;
}

let App = (props: AppProps) => {
  const {initialScreen = 'LandingLatestScreen'} = props;
  const MyComponent = Screens[initialScreen];
  return <MyComponent />;
};

export default App;
