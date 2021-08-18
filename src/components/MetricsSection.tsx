import { IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { TTFBModal } from "./TTFBModal";
import { metricService } from "../services/metric.service";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "50px",
  },

  header: {
    color: "#413839",
    marginBottom: "10px",
  },
  metricContainer: {
    [theme.breakpoints.up("sm")]: {
      padding: "0px 20px",
    },
    fontSize: ".9rem",

    "& > dl": {
      display: "flex",
      "& > dt": {
        minWidth: "175px",
        fontWeight: 600,
      },
    },
  },
}));

export const MetricsSection = () => {
  const styles = useStyles();
  const [ttfbOpen, setTTFBOpen] = useState(false);

  const handleTTFBHelp = () => {
    setTTFBOpen(true);
  };

  const handleTTFBModalClose = () => {
    setTTFBOpen(false);
  };

  return (
    <section className={styles.root}>
      <h1 className={styles.header}>Metrics</h1>
      <div className={styles.metricContainer}>
        <dl>
          <dt>
            Time to First Byte
            <IconButton aria-label="help" size="small" onClick={handleTTFBHelp}>
              <HelpOutlineIcon fontSize="inherit" color="primary" />
            </IconButton>
            :
          </dt>
          <dd>{metricService.ttfb && `${metricService.ttfb}s`}</dd>
        </dl>
        <dl>
          <dt>
            First Contentful Paint
            <IconButton aria-label="help" size="small">
              <HelpOutlineIcon fontSize="inherit" color="primary" />
            </IconButton>
            :
          </dt>
          <dd>{metricService.fcp && `${metricService.fcp}s`}</dd>
        </dl>
        <dl>
          <dt>
            Largest Contentful Paint
            <IconButton aria-label="help" size="small">
              <HelpOutlineIcon fontSize="inherit" color="primary" />
            </IconButton>
            :
          </dt>
          <dd>{metricService.lcp && `${metricService.lcp}s`}</dd>
        </dl>
        <dl>
          <dt>
            First Input Delay
            <IconButton aria-label="help" size="small">
              <HelpOutlineIcon fontSize="inherit" color="primary" />
            </IconButton>
            :
          </dt>
          <dd>{metricService.fid && `${metricService.fid}s`}</dd>
        </dl>
        <dl>
          <dt>
            Cumulative Layout Shift
            <IconButton aria-label="help" size="small">
              <HelpOutlineIcon fontSize="inherit" color="primary" />
            </IconButton>
            :
          </dt>
          <dd>{metricService.cls && `${metricService.cls}s`}</dd>
        </dl>
      </div>
      <TTFBModal open={ttfbOpen} onClose={handleTTFBModalClose} />
    </section>
  );
};
