import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from '../reducers';

const config = {
  key: 'root',
  storage,
};

const rootReducer = persistCombineReducers(config, reducers);

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore() {
  const logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
  });

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware, logger),
    ),
  );

  const persistor = persistStore(store);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  return { store, persistor };
}
