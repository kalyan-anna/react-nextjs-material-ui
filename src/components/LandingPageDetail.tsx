import { EstablishmentsThumbnail } from "./EstablishmentsThumbnail";
import React from "react";
import { expoSelectors } from "../store/expo/selectors";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const LandingPageDetail = () => {
  const styles = useStyles();

  const establishments = useAppSelector(expoSelectors.establishments);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.root}
    >
      <h1>Establishments</h1>
      {establishments.map((est) => (
        <motion.div variants={item} key={est.id} className={styles.estItem}>
          <EstablishmentsThumbnail est={est} />
        </motion.div>
      ))}
    </motion.div>
  );
};
