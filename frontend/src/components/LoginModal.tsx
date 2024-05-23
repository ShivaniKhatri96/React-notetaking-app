import { useTheme } from "@mui/material/styles";
import { Box, Button, Dialog, TextField, useMediaQuery } from "@mui/material";
import { toggleLoginModal } from "../features/loginModal/login-modal-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LargeLogo from "../assets/largeLogo.png";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isActive = useAppSelector((state) => state.loginModal.isActive);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    dispatch(toggleLoginModal());
  };

  return (
    <Dialog fullScreen={fullScreen} open={isActive} onClose={handleClose}>
      <Box
        component="img"
        alt="logo"
        sx={{ width: { xs: "20rem", lg: "25rem" } }}
        src={LargeLogo}
      />
      <Box component="form">
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button>Log in</Button>
      </Box>
    </Dialog>
  );
};

export default LoginModal;
