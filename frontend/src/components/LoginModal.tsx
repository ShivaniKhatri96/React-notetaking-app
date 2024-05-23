import { useTheme } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { toggleLoginModal } from "../features/loginModal/login-modal-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isActive = useAppSelector((state) => state.loginModal.isActive);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    dispatch(toggleLoginModal());
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isActive}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
