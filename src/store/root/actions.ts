import {Action, ActionCreator} from 'redux';
import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import {
  RootActionTypes,
  ROOT_IS_AUTHENTICATED,
  ROOT_HAS_VOTED,
  ROOT_HAS_COMPLETED_XP,
  ROOT_MUTE_VIDEO,
  ROOT_UNMUTE_VIDEO,
} from './types';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Actions} from './reducers';
import {ReduxAppState} from '..';

export type Vote = {
  question1: boolean;
  question2: string;
  question3: string;
  question4: boolean;
  question5: boolean;
  question6: string;
  question7: string;
  code: string;
};

export const createVote: ActionCreator<ThunkAction<Promise<Actions>, ReduxAppState, undefined, Actions>> = (
  vote: Vote,
) => {
  return async (dispatch: ThunkDispatch<ReduxAppState, undefined, Action>) => {
    await API.graphql({query: mutations.createVote, variables: {input: vote}});
    return dispatch(hasVoted());
  };
};

export const hasVoted: ActionCreator<RootActionTypes> = () => {
  return {
    type: ROOT_HAS_VOTED,
  };
};

export const isAuthentifcated: ActionCreator<RootActionTypes> = (code: string) => {
  return {
    type: ROOT_IS_AUTHENTICATED,
    code,
  };
};

export const hasCompletedXp: ActionCreator<RootActionTypes> = () => {
  return {
    type: ROOT_HAS_COMPLETED_XP,
  };
};

export const muteVideo: ActionCreator<RootActionTypes> = () => {
  return {
    type: ROOT_MUTE_VIDEO,
  };
};

export const unmuteVideo: ActionCreator<RootActionTypes> = () => {
  return {
    type: ROOT_UNMUTE_VIDEO,
  };
};
