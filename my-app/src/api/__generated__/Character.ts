/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Character
// ====================================================

export interface Character_character {
  __typename: "Character";
  name: string;
  vision: string;
  weapon: string;
  background: string;
  imageURI: string;
  food: string;
  characterCard: string;
}

export interface Character {
  character: Character_character | null;
}

export interface CharacterVariables {
  id?: string | null;
}
