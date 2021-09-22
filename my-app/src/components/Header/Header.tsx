import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Link } from '@material-ui/core';
import { Sidebar } from '../Sidebar/Sidebar';
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@material-ui/core';

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
     
      textSize:200
    },
    button: {
      fontFamily:'Genshin',
     color: '#FFFF'
    },
    bar:{
      background:'transparent'
    },
    MuiDrawer: {
      backgroundColor: "primary"
    }
    
  }),
);

export const NHeader = () => {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
};
const [darkMode, setDarkMode] = useState(false);
const theme = createTheme({
  palette: {
    primary:{
      main: darkMode ? '#3c3c41' : "#FFFFFF"
    }
    
  }
});

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static"   className={classes.bar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}   aria-label="menu" onClick={toggleSideBar}>
            <MenuIcon color="primary" />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                            <Sidebar />
                        </Drawer>
                    </IconButton>
          <Button className={classes.title} color='primary' href="/home" component={Link} >
            Genshin Impact
          </Button>
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
          
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
