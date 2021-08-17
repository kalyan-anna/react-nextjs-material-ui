import { Box, makeStyles } from "@material-ui/core";

import { AppLogo } from "./AppLogo";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(90deg, rgba(232,234,246,1) 1%, rgba(197,203,233,1) 25%, rgba(159,168,218,1) 52%, rgba(92,107,192,1) 78%, rgba(85,108,214,0.9738270308123249) 100%)",
    width: "100%",
    height: "65px",
    position: "relative",
  },
  siteTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: theme.palette.primary.dark,
    textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
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
