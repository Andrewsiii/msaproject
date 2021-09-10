/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Albedo
// ====================================================

export interface Albedo_character {
  __typename: "Character";
  name: string;
  vision: string;
  weapon: string;
  background: string;
  imageURI: string;
}

export interface Albedo {
  character: Albedo_character | null;
}
