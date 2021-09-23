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
  export const EDIT_COMMENT = gql`
  mutation EditComment(
    $commentId: ID!,
    $content: String
  ) {
    editComment(input: { commentId: $commentId, content: $content}) {
      content
      characterId
      townId
    }
  }
  `
  export const EDIT_CHARACTER = gql`
  mutation EditCharacter(
    $characterId: ID!
    $name: String
    $vision: String
    $weapon: String
    $background: String
    $imageURI: String
    $food: String
    $description: String
    $nation: String
  ) {
    editCharacter(
      input: {
      characterId: $characterId,
    name: $name,
    vision: $vision,
    weapon: $weapon,
    background: $background,
    imageURI: $imageURI,
    food: $food,
    description: $description,
    nation: $nation
      }
    ) {
      vision
      weapon
      name
      background
      imageURI
      food
      description
      nation
    }
  }
  `
  export const ADD_CHARACTER = gql`
  mutation AddCharacter(
    $name: String
    $vision: String
    $weapon: String
    $background: String
    $imageURI: String
    $food: String
    $description: String
    $nation: String
  ) {
    addCharacter(input: { name: $name,
      vision: $vision,
      weapon: $weapon,
      background: $background,
      imageURI: $imageURI,
      food: $food,
      description: $description,
      nation: $nation }) {
     
      vision
      weapon
      name
      background
      imageURI
      food
      description
      nation
    }
  }
  `
  