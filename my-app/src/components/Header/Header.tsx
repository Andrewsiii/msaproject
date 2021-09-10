import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Link } from '@material-ui/core';
import { Sidebar } from '../Sidebar/Sidebar';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily:'Genshin',
      flexGrow: 1,
      color:'#FFFF',
      textSize:200
    },
    button: {
      fontFamily:'Genshin',
     color: '#FFFF'
    },
    bar:{
      backgroundColor: "transparent"
    }
  }),
);

export default function NHeader() {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
};
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu" onClick={toggleSideBar}>
            <MenuIcon style={{ color: "#FFFFFF" }} />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                            <Sidebar />
                        </Drawer>
                    </IconButton>
          <Button className={classes.title}  href="/home" component={Link} >
            Genshin Impact
          </Button>
          <Button className= {classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
