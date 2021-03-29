/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
