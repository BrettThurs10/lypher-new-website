import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { theme } from "../../styles/theme";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface IMailDialog {
  open: boolean;
  handleClose: any;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function MailDialog({ open, handleClose }: IMailDialog) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Contact Super Moon Base
        </BootstrapDialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Contact the developer of Lypher,{" "}
            <a
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
              href="https://twitter.com/BrettThurs10"
            >
              Brett Thurston
            </a>
            , at Super Moon Base. He will try to respond to inquiries as fast as
            humanly possible.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box sx={{ p: 2 }}>
            <Button autoFocus variant="contained">
              Email SuperMoonBaseApps@gmail.com
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
