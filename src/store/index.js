import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";
import ReduxThunk from 'redux-thunk';

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
}

const store = createStore(
  combineReducers({heroes, filters}),
  compose(
    applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
