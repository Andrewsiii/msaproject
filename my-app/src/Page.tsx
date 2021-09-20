import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {gql, useQuery} from '@apollo/client';
import { CircularProgress, Grid } from '@material-ui/core';
import { Characters, Characters_characters_nodes } from './api/__generated__/Characters';
import CharacterText from './CharacterText';
import PictureCard from './components/Card/PictureCard'
import NHeader from './components/Header/Header';
import { CHARACTERS } from './api/queries';
import CharacterDesc from './components/Card/CharacterDesc';
import CommentBox from './components/Card/CommentBox';

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
  },
  
 
});

  export interface FeedPageProps {
    card: number;
  }
  
  

 
export const Page = ({ card }: FeedPageProps) => {
  const classes = useStyles();
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  const {loading, error, data} = useQuery<Characters>(CHARACTERS)
 useEffect(() => {
 
  if(loading){
  <h1> Loading... </h1>
  }
  if(!loading && !error) {
    setCards(data!.characters!.nodes!.map((character : Characters_characters_nodes) => {
        return <Grid
        key="{Grid}"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
          
         <Grid item xs={12} sm ={12} md = {6} lg = {6}>
         <PictureCard cardMedia= {character.imageURI} 
         cardTitle= {character.name}  /> 
          </Grid>
          <Grid item xs={12} sm ={12} md = {6} lg = {6}
          >
           <CharacterText
           charcomment={character.name}
            cardwep = {character.weapon}
            cardTitle={character.name}
            subHeader={character.vision}
            cardback={character.background}
            food={character.food}

         />
         </Grid>
         <Grid item xs={12} sm ={12} md = {12} lg = {12}
          >
           <CharacterDesc
            Description={character.description}
         />
         </Grid>
         <Grid item xs={12} sm ={12} md = {12} lg = {12}
          > 
          
           <CommentBox
            comment={character.name}
         />
         </Grid>
         
         </Grid>
       
    }))
    
}
 }, [data]
 );

return (
   
    <div className={classes.bg}>
    <NHeader/>
    
   
     {cards.length === 0 ? <CircularProgress /> :cards[card]} 
    
     
    
   
        </div>
  );
  }; 