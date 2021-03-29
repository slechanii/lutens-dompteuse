/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      question1
      question2
      question3
      question4
      question5
      question6
      question7
      code
      createdAt
      updatedAt
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      question1
      question2
      question3
      question4
      question5
      question6
      question7
      code
      createdAt
      updatedAt
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      question1
      question2
      question3
      question4
      question5
      question6
      question7
      code
      createdAt
      updatedAt
    }
  }
`;
