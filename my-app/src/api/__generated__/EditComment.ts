/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditComment
// ====================================================

export interface EditComment_editComment {
  __typename: "Comment";
  content: string;
  characterId: number;
  townId: number;
}

export interface EditComment {
  editComment: EditComment_editComment | null;
}

export interface EditCommentVariables {
  commentId: string;
  content?: string | null;
}
