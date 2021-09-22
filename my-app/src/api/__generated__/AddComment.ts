/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddComment
// ====================================================

export interface AddComment_addComment {
  __typename: "Comment";
  content: string;
  characterId: number;
  townId: number;
}

export interface AddComment {
  addComment: AddComment_addComment | null;
}

export interface AddCommentVariables {
  content: string;
  characterId: string;
  townId: string;
}
