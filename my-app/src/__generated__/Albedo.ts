/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Albedo
// ====================================================

export interface Albedo_characters_nodes {
  __typename: "Character";
  id: string;
  name: string;
  vision: string;
  weapon: string;
  background: string;
  imageURI: string;
}

export interface Albedo_characters {
  __typename: "CharacterConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (Albedo_characters_nodes | null)[] | null;
}

export interface Albedo {
  characters: Albedo_characters | null;
}
