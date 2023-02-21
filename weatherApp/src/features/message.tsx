import { useState, useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../store/";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";

const MsgAlert = forwardRef<HTMLDivElement, AlertProps>(function MsgAlert(
  props,
  ref
) {
  return (
    <Alert
      elevation={6}
      ref={ref}
      variant="filled"
      sx={{ width: "100%" }}
      {...props}
    ></Alert>
  );
});

const AppSnackBar = function () {
  const [open, setOpen] = useState(false);
  const message = useSelector((state: AppState) => state.message);
  const handleClose = function () {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(Object.keys(message).length > 0);
  }, [message]);
  return Object.keys(message).length > 0 ? (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MsgAlert severity={message.type}>{message.content}</MsgAlert>
    </Snackbar>
  ) : null;
};

export default AppSnackBar;
