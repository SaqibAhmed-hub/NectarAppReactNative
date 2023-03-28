import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/navigation/AppContainer';
import { store } from './src/redux/stores/store';

function App(): JSX.Element {

  return (
    <Provider
      store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
