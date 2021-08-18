import { Container, makeStyles } from "@material-ui/core";

import { EstablishmentListSection } from "./EstablishmentListSection";
import React from "react";
import { expoSelectors } from "../store/expo/selectors";
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
  estItem: {
    width: "100%",
    maxWidth: "320px",
    height: "120px",
  },
});

export const LandingPageDetail = () => {
  const styles = useStyles();

  const establishments = useAppSelector(expoSelectors.establishments);

  return (
    <Container>
      <EstablishmentListSection establishments={establishments} />
    </Container>
  );
};
