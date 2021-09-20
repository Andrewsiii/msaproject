import { gql } from "@apollo/client";
export const CHARACTERS = gql`
query Characters{
  characters(first:40){
    edges{
        cursor
    } 
    nodes{
        Nation
        id
        name
        vision 
        weapon 
        background
        imageURI
        food
        characterCard
        description
        comments{
          content
          created
        }
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
        description
        comments{
          content
        }
        }
    }
    `
export const TOWNS = gql`
query towns{
  towns(first:4){
    edges{
        cursor
    } 
    nodes{
        name
        description
        imageURL
        comments{
        content
        created
          }
        }
    }
  }

`