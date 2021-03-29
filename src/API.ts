/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVoteInput = {
  id?: string | null,
  question1: boolean,
  question2?: string | null,
  question3?: string | null,
  question4: boolean,
  question5: boolean,
  question6?: string | null,
  question7?: string | null,
  code?: string | null,
};

export type ModelVoteConditionInput = {
  question1?: ModelBooleanInput | null,
  question2?: ModelStringInput | null,
  question3?: ModelStringInput | null,
  question4?: ModelBooleanInput | null,
  question5?: ModelBooleanInput | null,
  question6?: ModelStringInput | null,
  question7?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateVoteInput = {
  id: string,
  question1?: boolean | null,
  question2?: string | null,
  question3?: string | null,
  question4?: boolean | null,
  question5?: boolean | null,
  question6?: string | null,
  question7?: string | null,
  code?: string | null,
};

export type DeleteVoteInput = {
  id?: string | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  question1?: ModelBooleanInput | null,
  question2?: ModelStringInput | null,
  question3?: ModelStringInput | null,
  question4?: ModelBooleanInput | null,
  question5?: ModelBooleanInput | null,
  question6?: ModelStringInput | null,
  question7?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      question1: boolean,
      question2: string | null,
      question3: string | null,
      question4: boolean,
      question5: boolean,
      question6: string | null,
      question7: string | null,
      code: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote:  {
    __typename: "Vote",
    id: string,
    question1: boolean,
    question2: string | null,
    question3: string | null,
    question4: boolean,
    question5: boolean,
    question6: string | null,
    question7: string | null,
    code: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
