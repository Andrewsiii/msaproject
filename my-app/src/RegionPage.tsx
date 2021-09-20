import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ButtonAppBar from './components/Header/Header';
import InazumaCard from './components/Card/InazumaCard';
import MondstadtCard from './components/Card/MondstadtCard';
import LiyueCard from './components/Card/LiyueCard';

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
export const RegionPage = () => {
  const classes = useStyles();

  return (
      
    <div className={classes.bg}>
      
      
                 <ButtonAppBar/>
            
        <Grid container
       
        spacing={3}
         >
            
<Grid item xs={12} sm ={12} md = {12} lg = {4}>
        
    <InazumaCard/>
</Grid>
<Grid item xs={12} sm ={12} md={12} lg = {4} >
    <MondstadtCard/>
</Grid>
<Grid item xs={12} sm ={12} md={12} lg = {4} >
    <LiyueCard/>
</Grid>
</Grid>
        </div>
       
  );
  };