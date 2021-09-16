import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CircularProgress, Grid, Link } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import { Characters, Characters_characters_nodes } from './api/__generated__/Characters';
import  CharacterListCard  from './components/Card/CharacterListCard';
import NHeader from './components/Header/Header';

import CharacterList from './components/Card/CharacterList';
const useStyles = makeStyles({

  bg:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/genshin3.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
    backgroundColor: 'rgba(0,0,0,3)',
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
 
 export const CharacterListPage = () => {
   const classes = useStyles();
   const [cards, setCards] = React.useState<JSX.Element[]>([]);
   const {loading, error, data} = useQuery<Characters>(Get_Char)
  useEffect(() => {
 
  
   if(!loading && !error) {
     setCards(data!.characters!.nodes!.map((character : Characters_characters_nodes) => {
         return <CharacterListCard cardMedia= {character.imageURI} 
       cardTitle= {character.name} 
       cardVision={character.vision} /> 
      
         
        
     }))
     
 }
  }, [data]
  );
  console.log(data)
 return (
    
     <div className={classes.bg}>
     <NHeader/>
   
     {cards.length === 0 ? <CircularProgress /> : <CharacterList cards={cards} cols={window.innerWidth / 200} />}
     
         </div>
   );
   }; 