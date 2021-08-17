import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import logoPng from "../../public/assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
  logo: {
    marginLeft: "15px",
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
          <Image
            src={logoPng}
            alt="BixExpo logo"
            className={classes.logo}
            width="50px"
            height="50px"
          />
          <span className={classes.appTitle}>
            SSR <small>vs</small> SSG
          </span>
        </Box>
      </a>
    </Link>
  );
};
