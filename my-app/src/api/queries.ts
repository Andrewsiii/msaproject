import { gql } from "@apollo/client";
export const CHARACTERS = gql`
query Characters{
  characters(first:40){
    edges{
        cursor
    } 
    nodes{
        id
        name
        vision 
        weapon 
        background
        imageURI
        food
        characterCard
      }
    }
  }

  
`
export const CHARACTER = gql`
    query Character($id: ID){
        character(id: $id){
        name
        vision 
        weapon 
        background
        imageURI
        food
        characterCard
        }
    }
    `

