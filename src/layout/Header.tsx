import { Box, makeStyles } from "@material-ui/core";

import { AppLogo } from "./AppLogo";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(90deg, #FCEEEC 1%, #F4BAB0 25%, #EB8979 52%, #E87461 78%, #D84433 100%)",
    width: "100%",
    height: "65px",
    position: "relative",
  },
  siteTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#413839",
    textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "-120px",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Box
      component="header"
      flexDirection="row"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      boxShadow={1}
      className={classes.root}
      px={1}
    >
      <AppLogo />
      <span className={classes.siteTitle}>Static Site Generation</span>
      <span></span>
    </Box>
  );
};
