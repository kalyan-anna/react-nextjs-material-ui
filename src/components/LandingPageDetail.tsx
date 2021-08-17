import { EstablishmentsThumbnail } from "./EstablishmentsThumbnail";
import React from "react";
import { expoSelectors } from "../store/expo/selectors";
import { makeStyles } from "@material-ui/core";
import { useAppSelector } from "../store";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    padding: "20px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > div": {
      margin: "10px 0",
    },
  },
});

export const LandingPageDetail = () => {
  const styles = useStyles();

  const establishments = useAppSelector(expoSelectors.establishments);

  return (
    <div className={styles.root}>
      <h1>Establishments</h1>
      {establishments.map((est) => (
        <EstablishmentsThumbnail key={est.id} est={est} />
      ))}
    </div>
  );
};
