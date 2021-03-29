export const ROOT_IS_AUTHENTICATED = 'ROOT_IS_AUTHENTICATED';
export const ROOT_HAS_VOTED = 'ROOT_HAS_VOTED';
export const ROOT_HAS_COMPLETED_XP = 'ROOT_HAS_COMPLETED_XP';
export const ROOT_MUTE_VIDEO = 'ROOT_MUTE_VIDEO';
export const ROOT_UNMUTE_VIDEO = 'ROOT_UNMUTE_VIDEO';

type isAuthentifcated = {
  type: typeof ROOT_IS_AUTHENTICATED;
  code: string;
};
type hasVoted = {
  type: typeof ROOT_HAS_VOTED;
};
type hasCompletedXp = {
  type: typeof ROOT_HAS_COMPLETED_XP;
};
type muteVideo = {
  type: typeof ROOT_MUTE_VIDEO;
};
type unmuteVideo = {
  type: typeof ROOT_UNMUTE_VIDEO;
};

export type RootActionTypes = isAuthentifcated | hasVoted | hasCompletedXp | muteVideo | unmuteVideo;

export interface RootState {
  hasValidateAuthentification: boolean;
  code?: string;
  hasVoted: boolean;
  completedXp: boolean;
  videoMuted: boolean;
}
