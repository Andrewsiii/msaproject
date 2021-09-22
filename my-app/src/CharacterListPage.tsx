import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { Characters, Characters_characters_nodes } from './api/__generated__/Characters';
import  CharacterListCard  from './components/Card/CharacterListCard';
import {NHeader} from './components/Header/Header';

import CharacterList from './components/Card/CharacterList';
import { CHARACTERS } from './api/queries';
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

 
 export const CharacterListPage = () => {
   const classes = useStyles();
   const [cards, setCards] = React.useState<JSX.Element[]>([]);
   const {loading, error, data} = useQuery<Characters>(CHARACTERS)
  useEffect(() => {
 
  
   if(!loading && !error) {
     setCards(data!.characters!.nodes!.map((character : Characters_characters_nodes) => {
         return <CharacterListCard cardMedia= {character.characterCard} 
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