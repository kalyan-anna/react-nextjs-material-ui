import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  makeStyles,
} from "@material-ui/core";

import { Establishment } from "../store/expo";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "320px",
    height: "120px",
    backgroundColor: "#413839",
    color: "#fff",
  },
  estName: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "5px",
    lineHeight: "1.5rem",
  },
});

interface EstablishmentsThumbnailProps {
  est: Establishment;
}

export const EstablishmentsThumbnail: React.FC<EstablishmentsThumbnailProps> =
  ({ est }) => {
    const styles = useStyles();

    return (
      <Card className={styles.root} elevation={3}>
        <CardContent>
          <div className={styles.estName}>{est.name}</div>
          <div>Stall: {est.stallNumber}</div>
        </CardContent>
        <CardActions>
          <Link href={`/establishment/${est.id}`} passHref>
            <Button size="small" color="primary">
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  };
