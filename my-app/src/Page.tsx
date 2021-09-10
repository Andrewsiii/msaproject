import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {gql, useQuery} from '@apollo/client';
import { Typography } from '@material-ui/core';
import { Characters, Characters_characters_nodes } from './api/__generated__/Characters';
import CharacterText from './AlbedoText';


const useStyles = makeStyles({

  bg:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/genshin1.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
  },
  title: {
    color:"#FFFFFF",
    flexGrow: 1,
    fontSize: '4rem',
    fontFamily:'Genshin',
  },
  container:{
    textAlign: 'center',
  }
 
});
const ALBEDO = gql`
query Albedo{
    characters{
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
  export interface FeedPageProps {
    card: number;
  }
  
  

 
export const Page = ({ card }: FeedPageProps) => {
  const classes = useStyles();
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  const {loading, error, data} = useQuery<Characters>(ALBEDO)
 useEffect(() => {
  console.log(data)
  if(!loading && !error) {
    setCards(data!.characters!.nodes!.map((character : Characters_characters_nodes) => {
        return <CharacterText
            cardwep = {character.weapon}
            cardTitle={character.name}
            subHeader={character.vision}
            cardback={character.background}
            url={character.imageURI}
         />
       
    }))
    
}
 }, [data]
 );
 console.log(data)
return (
   
    <div>
    
     {cards[card]} 

     
   
        </div>
  );
  }; 