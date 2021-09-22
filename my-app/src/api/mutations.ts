import { gql } from "@apollo/client";
export const ADD_COMMENT = gql`
  mutation AddComment(
    $content: String!,
    $characterId: String!,
    $townId: String!
  ) {
    addComment(input: { content: $content, characterId: $characterId, townId: $townId }) {
     
      content
      characterId
      townId
    }
  }
  `