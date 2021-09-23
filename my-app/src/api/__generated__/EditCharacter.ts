/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditCharacter
// ====================================================

export interface EditCharacter_editCharacter {
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

export interface EditCharacter {
  editCharacter: EditCharacter_editCharacter | null;
}

export interface EditCharacterVariables {
  characterId: string;
  name?: string | null;
  vision?: string | null;
  weapon?: string | null;
  background?: string | null;
  imageURI?: string | null;
  food?: string | null;
  description?: string | null;
  nation?: string | null;
}
