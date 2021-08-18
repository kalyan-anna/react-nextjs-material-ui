import { Modal, makeStyles } from "@material-ui/core";

import React from "react";

interface TTFBModalProps {
  open: boolean;
  onClose: () => void;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.light}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  header: {
    color: "#413839",
  },
}));

export const TTFBModal: React.FC<TTFBModalProps> = ({ open, onClose }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 className={classes.header}>Time to First Byte</h2>
        <p>blah blah blah...</p>
      </div>
    </Modal>
  );
};
