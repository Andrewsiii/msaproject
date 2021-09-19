/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: towns
// ====================================================

export interface towns_towns_edges {
  __typename: "TownEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface towns_towns_nodes_comments {
  __typename: "Comment";
  content: string;
  created: any;
}

export interface towns_towns_nodes {
  __typename: "Town";
  name: string;
  description: string;
  imageURL: string;
  comments: towns_towns_nodes_comments[];
}

export interface towns_towns {
  __typename: "TownConnection";
  /**
   * A list of edges.
   */
  edges: towns_towns_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: towns_towns_nodes[] | null;
}

export interface towns {
  towns: towns_towns | null;
}
