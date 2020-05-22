import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const DEFAULT_STATE = {};

const createRootReducer = history => combineReducers({
  router: connectRouter(history)
});

export default createRootReducer;
