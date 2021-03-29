import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ReduxAppState} from '.';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxAppState, unknown, Action<string>>;
