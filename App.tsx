import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppContainer from './src/navigation/AppContainer';
import { store } from './src/redux/stores/store';

function App(): JSX.Element {

  return (
    <Provider
      store={store}>
      <GestureHandlerRootView style={{
        flex: 1,
        flexGrow: 1,
      }} >
        <AppContainer />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
