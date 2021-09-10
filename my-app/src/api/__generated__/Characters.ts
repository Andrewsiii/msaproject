/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Characters
// ====================================================

export interface Characters_characters_edges {
  __typename: "CharacterEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Characters_characters_nodes {
  __typename: "Character";
  id: string;
  name: string;
  vision: string;
  weapon: string;
  background: string;
  imageURI: string;
}

export interface Characters_characters {
  __typename: "CharacterConnection";
  /**
   * A list of edges.
   */
  edges: Characters_characters_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Characters_characters_nodes[] | null;
}

export interface Characters {
  characters: Characters_characters | null;
}
