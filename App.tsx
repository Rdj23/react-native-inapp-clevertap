import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import InAppScreen from './src/screens/InAppScreen'; // 👈 Correct import path

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      <InAppScreen />
    </View>
  );
}

export default App;
