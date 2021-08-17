import { FullPageSpinner } from "../components/FullPageSpinner";
import { Header } from "./Header";
import React from "react";
import { appSelector } from "../store/app/selectors";
import { makeStyles } from "@material-ui/core";
import { useAppSelector } from "../store";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flexGrow: 2,
    backgroundColor: "rgba(232, 234, 246, 1)",
    paddingTop: "1rem",
  },
});

export const DefaultTemplate: React.FC = ({ children }) => {
  const styles = useStyles();
  const isAppBusy = useAppSelector(appSelector.isAppBusy);

  return (
    <div className={styles.root}>
      {isAppBusy && <FullPageSpinner />}
      <Header />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
