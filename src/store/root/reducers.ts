import {isAuthentifcated, hasCompletedXp, hasVoted, muteVideo, unmuteVideo} from './actions';
import {
  RootActionTypes,
  RootState,
  ROOT_IS_AUTHENTICATED,
  ROOT_HAS_VOTED,
  ROOT_HAS_COMPLETED_XP,
  ROOT_MUTE_VIDEO,
  ROOT_UNMUTE_VIDEO,
} from './types';

export type Actions =
  | ReturnType<typeof isAuthentifcated>
  | ReturnType<typeof hasVoted>
  | ReturnType<typeof hasCompletedXp>
  | ReturnType<typeof muteVideo>
  | ReturnType<typeof unmuteVideo>;

export const initialState: RootState = {
  hasValidateAuthentification: false,
  hasVoted: false,
  completedXp: false,
  videoMuted: true,
};

export function rootReducer(state: RootState = initialState, action: RootActionTypes): RootState {
  console.log({action});
  switch (action.type) {
    case ROOT_IS_AUTHENTICATED:
      return {...state, hasValidateAuthentification: true, code: action.code};
    case ROOT_HAS_VOTED:
      return {...state, hasVoted: true};
    case ROOT_HAS_COMPLETED_XP:
      return {...state, completedXp: true};
    case ROOT_MUTE_VIDEO:
      return {...state, videoMuted: true};
    case ROOT_UNMUTE_VIDEO:
      return {...state, videoMuted: false};
    default:
      return state;
  }
}
