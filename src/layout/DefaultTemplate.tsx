import { Header } from "./Header";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flexGrow: 2,
  },
});

export const DefaultTemplate: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
