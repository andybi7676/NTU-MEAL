import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { loadState, saveState } from './localState';
import throttle from 'lodash/throttle';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
// import { register } from './push';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user
  })
}, 1000));


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
