import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './root/reducers';
import {saveState, loadState} from './localStorage';

export type ReduxAppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
// const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export {store};
