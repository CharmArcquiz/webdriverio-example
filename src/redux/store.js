import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer, { DEFAULT_STATE } from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    createRootReducer(history),
    DEFAULT_STATE,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );
};

export default configureStore;
