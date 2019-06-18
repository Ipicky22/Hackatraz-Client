import React from 'react';
import AppNavigator from './src/navigation'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>

  );
}

