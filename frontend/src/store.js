import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import auth from './components/Auth/reducer';

const rootReducer = combineReducers({
   auth
});

export const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : f => f
   )
);