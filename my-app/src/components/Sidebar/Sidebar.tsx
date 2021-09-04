import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    fontFamily:'Genshin',
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/home" component={Link}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button href="/character" component={Link} >
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Character" />
          
        </ListItem>
        <ListItem button href="/Albedo" component={Link}>
        <ListItemText className={classes.listText} primary="Albedo" />
        </ListItem>
        <ListItem button href="/Aloy" component={Link}>
        <ListItemText className={classes.listText} primary="Aloy" />
        </ListItem>
        <ListItem button href="/Amber" component={Link}>
        <ListItemText className={classes.listText} primary="Amber" />
        </ListItem>
        <ListItem button href="/Barbara" component={Link}>
        <ListItemText className={classes.listText} primary="Barbara" />
        </ListItem>
        <ListItem button href="/Beidou" component={Link}>
        <ListItemText className={classes.listText} primary="Beidou" />
        </ListItem>
        <ListItem button href="/Bennett" component={Link}>
        <ListItemText className={classes.listText} primary="Bennett" />
        </ListItem>
        <ListItem button href="/Chongyun" component={Link}>
        <ListItemText className={classes.listText} primary="Chongyun" />
        </ListItem>
        <ListItem button href="/Diluc" component={Link}>
        <ListItemText className={classes.listText} primary="Diluc" />
        </ListItem>
        <ListItem button href="/Diona" component={Link}>
        <ListItemText className={classes.listText} primary="Diona" />
        </ListItem>
        <ListItem button href="/Eula" component={Link}>
        <ListItemText className={classes.listText} primary="Eula" />
        </ListItem>
        <ListItem button href="/Fischl" component={Link}>
        <ListItemText className={classes.listText} primary="Fischl" />
        </ListItem>
        <ListItem button href="/Ganyu" component={Link}>
        <ListItemText className={classes.listText} primary="Ganyu" />
        </ListItem>
        <ListItem button href="/Hu-Tao" component={Link}>
        <ListItemText className={classes.listText} primary="Hu Tao" />
        </ListItem>
        <ListItem button href="/Jean" component={Link}>
        <ListItemText className={classes.listText} primary="Jean" />
        </ListItem>
        <ListItem button href="/Kaedehara-Kazuha" component={Link}>
        <ListItemText className={classes.listText} primary="Kaedehara Kazuha" />
        </ListItem>
        <ListItem button href="/Kaeya" component={Link}>
        <ListItemText className={classes.listText} primary="Kaeya" />
        </ListItem>
        <ListItem button href="/Kamisato-Ayaka" component={Link}>
        <ListItemText className={classes.listText} primary="Kamisato Ayaka" />
        </ListItem>
        <ListItem button href="/Keqing" component={Link}>
        <ListItemText className={classes.listText} primary="Keqing" />
        </ListItem>
        <ListItem button href="/Klee" component={Link}>
        <ListItemText className={classes.listText} primary="Klee" />
        </ListItem>
        <ListItem button href="/Kujou-Sara" component={Link}>
        <ListItemText className={classes.listText} primary="Kujou Sara" />
        </ListItem>
        <ListItem button href="/Lisa" component={Link}>
        <ListItemText className={classes.listText} primary="Lisa" />
        </ListItem>
        <ListItem button href="/Mona" component={Link}>
        <ListItemText className={classes.listText} primary="Mona" />
        </ListItem>
        <ListItem button href="/Ningguang" component={Link}>
        <ListItemText className={classes.listText} primary="Ningguang" />
        </ListItem>
        <ListItem button href="/Noelle" component={Link}>
        <ListItemText className={classes.listText} primary="Noelle" />
        </ListItem>
        <ListItem button href="/Qiqi" component={Link}>
        <ListItemText className={classes.listText} primary="Qiqi" />
        </ListItem>
        <ListItem button href="/Raiden-Shogun" component={Link}>
        <ListItemText className={classes.listText} primary="Raiden Shogun" />
        </ListItem>
        <ListItem button href="/Razor" component={Link}>
        <ListItemText className={classes.listText} primary="Razor" />
        </ListItem>
        <ListItem button href="/Rosaria" component={Link}>
        <ListItemText className={classes.listText} primary="Rosaria" />
        </ListItem>
        <ListItem button href="/Sayu" component={Link}>
        <ListItemText className={classes.listText} primary="Sayu" />
        </ListItem>
        <ListItem button href="/Sucrose" component={Link}>
        <ListItemText className={classes.listText} primary="Sucrose" />
        </ListItem>
        <ListItem button href="/Tartaglia" component={Link}>
        <ListItemText className={classes.listText} primary="Tartaglia" />
        </ListItem>
        <ListItem button href="/Traveler" component={Link}>
        <ListItemText className={classes.listText} primary="Traveler" />
        </ListItem>
        <ListItem button href="/Venti" component={Link}>
        <ListItemText className={classes.listText} primary="Venti" />
        </ListItem>
        <ListItem button href="/Xiangling" component={Link}>
        <ListItemText className={classes.listText} primary="Xiangling" />
        </ListItem>
        <ListItem button href="/Xiao" component={Link}>
        <ListItemText className={classes.listText} primary="Xiao" />
        </ListItem>
        <ListItem button href="/Xingqiu" component={Link}>
        <ListItemText className={classes.listText} primary="Xingqiu" />
        </ListItem>
        <ListItem button href="/Xinyan" component={Link}>
        <ListItemText className={classes.listText} primary="Xinyan" />
        </ListItem>
        <ListItem button href="/Yanfei" component={Link}>
        <ListItemText className={classes.listText} primary="Yanfei" />
        </ListItem>
        <ListItem button href="/Yoimiya" component={Link}>
        <ListItemText className={classes.listText} primary="Yoimiya" />
        </ListItem>
        <ListItem button href="/Zhongli" component={Link}>
        <ListItemText className={classes.listText} primary="Zhongli" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Region" />
        </ListItem>
        <ListItem button href="/Mondstadt" component={Link}>
        <ListItemText className={classes.listText} primary="Mondstadt" />
        </ListItem>
        <ListItem button href="/Liyue" component={Link}>
        <ListItemText className={classes.listText} primary="Liyue" />
        </ListItem>
        <ListItem button href="/Inazuma" component={Link}>
        <ListItemText className={classes.listText} primary="Inazuma" />
        </ListItem>
      </List>
    </div>
  );
};