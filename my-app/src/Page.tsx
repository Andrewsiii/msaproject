import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {gql, useQuery} from '@apollo/client';
import { Grid, Typography } from '@material-ui/core';
import { Characters, Characters_characters_nodes } from './api/__generated__/Characters';
import CharacterText from './AlbedoText';
import PictureCard from './components/Card/PictureCard'
import NHeader from './components/Header/Header';

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
const Get_Char = gql`
query Albedo{
    characters(first:40){
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
  const {loading, error, data} = useQuery<Characters>(Get_Char)
 useEffect(() => {
  console.log(data)
  if(!loading && !error) {
    setCards(data!.characters!.nodes!.map((character : Characters_characters_nodes) => {
        return <Grid>
          <Grid item xs={6} sm ={6} md = {6} lg = {6}>
           <CharacterText
            cardwep = {character.weapon}
            cardTitle={character.name}
            subHeader={character.vision}
            cardback={character.background}
            url={character.imageURI}
         />
         </Grid>
         <Grid item xs={6} sm ={6} md = {6} lg = {6}>
         <PictureCard cardMedia= {character.imageURI} 
         cardTitle= {character.name}  /> 
          </Grid>
         </Grid>
       
    }))
    
}
 }, [data]
 );
 console.log(data)
return (
   
    <div className={classes.bg}>
    <NHeader/>
    
   
     {cards[card]} 
    
     
    
   
        </div>
  );
  }; 