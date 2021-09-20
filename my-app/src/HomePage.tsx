import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card1 from "./components/Card/Card1"
import Card2 from "./components/Card/Card2"
import ButtonAppBar from './components/Header/Header';

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
export const HomePage = () => {
  const classes = useStyles();

  return (
      
    <div className={classes.bg}>
      
      
                 <ButtonAppBar/>
            
        <Grid container
       
        spacing={3}
         >
            
<Grid item xs={12} sm ={12} md = {12} lg = {6}>
        
    <Card1 ></Card1>
</Grid>
<Grid item xs={12} sm ={12} md={12} lg = {6} >
    <Card2></Card2>
</Grid>
</Grid>
        </div>
       
  );
  };