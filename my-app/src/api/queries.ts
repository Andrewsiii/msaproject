import { gql } from "@apollo/client";
export const CHARACTERS = gql`
query Characters{
  characters{
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
        }
    }
  
    `
