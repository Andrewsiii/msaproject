import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery} from '@apollo/client';
import { CircularProgress, Grid } from '@material-ui/core';
import PictureCard from './components/Card/PictureCard'
import NHeader from './components/Header/Header';
import { TOWNS } from './api/queries';
import CharacterDesc from './components/Card/CharacterDesc';
import { towns, towns_towns_nodes } from './api/__generated__/towns';

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
  
  

 
export const RegionDescPage = ({ card }: FeedPageProps) => {
  const classes = useStyles();
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  const {loading, error, data} = useQuery<towns>(TOWNS)
 useEffect(() => {
  console.log(data)
  if(loading){
  <h1> Loading... </h1>
  }
  if(!loading && !error) {
    setCards(data!.towns!.nodes!.map((town : towns_towns_nodes) => {
        return <Grid
        key="{Grid}"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
          
         <Grid item xs={12} sm ={12} md = {6} lg = {6}>
         <PictureCard cardMedia= {town.imageURL}
         cardTitle= {town.name}   /> 
          </Grid>
          <Grid item xs={12} sm ={12} md = {6} lg = {6}
          >
           <CharacterDesc
            Description={town.description}
         />
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
    
   
     {cards.length === 0 ? <CircularProgress /> :cards[card]} 
    
     
    
   
        </div>
  );
  }; 