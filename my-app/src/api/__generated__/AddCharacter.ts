/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCharacter
// ====================================================

export interface AddCharacter_addCharacter {
  __typename: "Character";
  vision: string;
  weapon: string;
  name: string;
  background: string;
  imageURI: string;
  food: string;
  description: string;
  nation: string;
}

export interface AddCharacter {
  addCharacter: AddCharacter_addCharacter | null;
}

export interface AddCharacterVariables {
  name?: string | null;
  vision?: string | null;
  weapon?: string | null;
  background?: string | null;
  imageURI?: string | null;
  food?: string | null;
  description?: string | null;
  nation?: string | null;
}
