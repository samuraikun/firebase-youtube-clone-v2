import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from './config/firebase';
import Header from './components/Header';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const middlewares = [thunk.withExtraArgument({getFirebase, getFirestore})];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer]

export interface State {
  firebase: {
    auth: firebase.auth.Auth;
    profile: firebase.UserInfo;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )
);

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
