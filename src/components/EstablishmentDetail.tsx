import React from "react";
import { expoSelectors } from "../store/expo/selectors";
import { makeStyles } from "@material-ui/core";
import { useAppSelector } from "../store";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    padding: "20px",
    margin: "0 auto",
    textAlign: "center",
  },
  estName: {
    fontSize: "3rem",
  },
});

type EstablishmentDetailProps = {
  id: string;
};

export const EstablishmentDetail: React.FC<EstablishmentDetailProps> = ({
  id,
}) => {
  const styles = useStyles();
  const est = useAppSelector(expoSelectors.establishmentById(id));
  return (
    <div className={styles.root}>
      <h1 className={styles.estName}>{est.name}</h1>
      <div>{est.detail}</div>
    </div>
  );
};
