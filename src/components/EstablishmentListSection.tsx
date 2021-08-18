import { Establishment } from "../store/expo";
import { EstablishmentsThumbnail } from "./EstablishmentsThumbnail";
import React from "react";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },

  header: {
    color: "#413839",
    marginBottom: "10px",
  },

  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& > div": {
      margin: "0 10px 10px 0",
    },
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

interface EstablishmentListSectionProps {
  establishments: Establishment[];
}

export const EstablishmentListSection: React.FC<EstablishmentListSectionProps> =
  ({ establishments }) => {
    const styles = useStyles();

    return (
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.root}
      >
        <h1 className={styles.header}>Establishments</h1>
        <div className={styles.listContainer}>
          {establishments.map((est) => (
            <motion.div variants={item} key={est.id}>
              <EstablishmentsThumbnail est={est} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };
