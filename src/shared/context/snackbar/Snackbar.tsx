import React, { createContext, useContext, useState, ReactNode } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertColor, AlertPropsColorOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

interface SnackbarContextProps {
  openSnackbar: (message: string, severity?: AlertSeverity, duration?: number) => void;
  closeSnackbar: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
  severity?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

interface SnackbarProviderProps {
  children: ReactNode;
}

export enum AlertSeverity {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

const SNACKBAR_DURATION = 5000;
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertSeverity>(AlertSeverity.Success);
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState<number | null>(SNACKBAR_DURATION);

  const openSnackbar = (msg: string, severity = AlertSeverity.Success, duration = SNACKBAR_DURATION) => {
    setMessage(msg);
    setSeverity(severity);
    setDuration(duration);
    setOpen(true);
  };

  const closeSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason !== 'clickaway') {
      setOpen(false);
    }
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar, severity }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={closeSnackbar}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={closeSnackbar} severity={severity}
            sx={{
              fontSize: '1.2rem', // Increase font size
              padding: '16px', // Increase padding for bigger alert
              minWidth: '300px', // Adjust min width for larger content
            }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
