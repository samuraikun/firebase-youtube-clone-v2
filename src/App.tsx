import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
