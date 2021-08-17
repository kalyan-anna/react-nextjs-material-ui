import { BASE_PATH } from "../utils/config.helper";
/* eslint-disable @next/next/no-img-element */
import { Box } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
  logo: {
    marginLeft: "15px",
    width: "50px",
    height: "50px",
  },
  appTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "1.2rem",
    color: theme.palette.primary.dark,
    fontStyle: "oblique",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
      fontSize: "1.5rem",
    },
    "& small": {
      fontSize: "0.75rem",
      color: theme.palette.primary.light,
    },
  },
}));

export const AppLogo = () => {
  const classes = useStyles();

  return (
    <Link href="/">
      <a className={classes.root}>
        <Box flexDirection="row" alignItems="center" display="flex">
          <img
            src={`${BASE_PATH}/assets/logo.png`}
            alt="BixExpo logo"
            className={classes.logo}
          />
          <span className={classes.appTitle}>
            SSR <small>vs</small> SSG
          </span>
        </Box>
      </a>
    </Link>
  );
};
