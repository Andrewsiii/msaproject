import React from "react";
import { createStyles, Grid, IconButton, makeStyles, Theme } from "@material-ui/core";
import genshinImpact from "./logos/Genshin_Impact_logo.svg"
import { SOCIAL_MEDIA } from "./resources";
export interface SocialIconProps {
  name: string;
  url: string;
  logo: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, url, logo }) => {
  return (
    <IconButton href={url}>
      <img src={logo} id={logo} height="20px" alt={name} />
    </IconButton>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 60,
      textAlign: "center",
      fontSize: "12px",
      background: "#3c3c41",
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Genshin = {
  name: "Genshin",
  url: "https://genshin.mihoyo.com/en/",
  logo: genshinImpact,
};

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={4}
      >
       <Grid item xs={4}>
                    <SocialIcon {...Genshin} />
                    {`Copyright © Mihoyo, 2021`}
                </Grid>
                <Grid item xs={6}>
                        {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
                            return (
                                <SocialIcon key={icon.name} {...icon} />
                            )
                        })}
                    </Grid>
                    </Grid> 
  </footer>
  )};