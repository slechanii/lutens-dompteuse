import {ReduxAppState} from '.';

export const loadState = (): ReduxAppState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const data = JSON.parse(serializedState);
    data.videoMuted = true;
    return data;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: ReduxAppState): void => {
  try {
    const savedState = Object.assign({}, state);
    savedState.videoMuted = true;
    const serializedState = JSON.stringify(savedState);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore
  }
};
