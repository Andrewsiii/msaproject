import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Grid, Link } from '@material-ui/core';
import ButtonAppBar from './components/Header/Header';
import AloyCard   from './components/Card/AloyCard';
import AmberCard from './components/Card/AmberCard';
import BarbaraCard from './components/Card/BarbaraCard';
import AyakaCard from './components/Card/AyakaCard';
import * as All from './components/Card'
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
export const CharacterPage = () => {
  const classes = useStyles();

  return (
      
    <div className={classes.bg}>
      
      
                 <ButtonAppBar/>
            
        <Grid container
       
        spacing={0}
         >
            
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Albedo" component={Link}>
   <All.AlbedoCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Aloy" component={Link}>
   <All.AloyCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Ayaka" component={Link}>
   <All.AyakaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Barbara" component={Link}>
   <All.BarbaraCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Beidou" component={Link}>
   <All.BeidouCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Bennett" component={Link}>
   <All.BennettCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Chongyun" component={Link}>
   <All.ChongyunCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Diluc" component={Link}>
   <All.DilucCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Diona" component={Link}>
   <All.DionaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Eula" component={Link}>
   <All.EulaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Fischl" component={Link}>
   <All.FischlCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Ganyu" component={Link}>
   <All.GanyuCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/HuTao" component={Link}>
   <All.HuTaoCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Jean" component={Link}>
   <All.JeanCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Kaeya" component={Link}>
   <All.KaeyaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Kazuha" component={Link}>
   <All.KazuhaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Keqing" component={Link}>
   <All.KeqingCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Klee" component={Link}>
   <All.KleeCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/KujouSara" component={Link}>
   <All.KujouSaraCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Lisa" component={Link}>
   <All.LisaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Mona" component={Link}>
   <All.MonaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Ningguang" component={Link}>
   <All.NingguangCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Noelle" component={Link}>
   <All.NoelleCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Qiqi" component={Link}>
   <All.QiqiCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Raiden" component={Link}>
   <All.RaidenCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Razor" component={Link}>
   <All.RazorCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Rosaria" component={Link}>
   <All.RosariaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Sayu" component={Link}>
   <All.SayuCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Sucrose" component={Link}>
   <All.SucroseCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Tartaglia" component={Link}>
   <All.TartagliaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Traveler" component={Link}>
   <All.TravelerCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Venti" component={Link}>
   <All.VentiCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Xiangling" component={Link}>
   <All.XianglingCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Xiao" component={Link}>
   <All.XiaoCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Xingqiu" component={Link}>
   <All.XingqiuCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Xinyan" component={Link}>
   <All.XinyanCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Yanfei" component={Link}>
   <All.YanfeiCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Yoimiya" component={Link}>
   <All.YoimiyaCard/>
   </CardActionArea >
</Grid>
<Grid item xs={12} sm ={6} md = {6} lg = {4}>
<CardActionArea href="/Zhongli" component={Link}>
   <All.ZhongliCard/>
   </CardActionArea >
</Grid>


</Grid>


</div>
       
  );
  };