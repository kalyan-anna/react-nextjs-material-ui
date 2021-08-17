import React, { useEffect } from "react";

import { FadeLoader } from "react-spinners";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
import theme from "../styles/theme";
import { useRef } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    opacity: "0.75",
    backgroundColor: grey[300],
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FullPageSpinner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const styles = useStyles();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <div
      className={styles.root}
      data-testid="full-page-spinner"
      tabIndex={-1}
      ref={containerRef}
      aria-label="Loading"
    >
      <FadeLoader loading={true} color={theme.palette.primary.light} />
    </div>
  );
};
